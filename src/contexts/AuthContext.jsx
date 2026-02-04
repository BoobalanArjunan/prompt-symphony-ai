import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, googleProvider, db } from '../firebase';
import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    serverTimestamp,
    deleteDoc,
    collection,
    addDoc
} from 'firebase/firestore';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail
} from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Firestore based daily limit system
    const checkDailyLimit = () => {
        if (!userData || !userData.usage) return { count: 0, allowed: true }; // Fallback

        const isPro = userData.subscription?.planId !== 'free';
        const limit = isPro ? 1000 : 5;
        const count = userData.usage.dailyCount || 0;

        return {
            count,
            allowed: isPro || count < limit
        };
    };

    const incrementCopyCount = async () => {
        if (!user) return 0;

        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef); // Get fresh data to be safe
        const today = new Date().toISOString().split('T')[0];

        if (userSnap.exists()) {
            const data = userSnap.data();
            let currentDaily = (data.usage?.lastResetDate === today) ? (data.usage?.dailyCount || 0) : 0;

            // STRICT LIMIT CHECK with Fresh Data
            const isPro = data.subscription?.planType !== 'free' && data.subscription?.planId !== 'free';
            const limit = isPro ? 1000 : 5;

            if (currentDaily >= limit) {
                // Return failure signal or throw
                // We'll return -1 to signal blocked
                return -1;
            }

            const newDaily = currentDaily + 1;
            const newTotal = (data.stats?.totalPromptsCopied || 0) + 1;

            await updateDoc(userRef, {
                'usage.dailyCount': newDaily,
                'usage.lastResetDate': today, // Ensure date matches
                'stats.totalPromptsCopied': newTotal,
                'stats.lastFeatureAccessed': 'prompt_copy'
            });

            // Update local state partially
            setUserData(prev => ({
                ...prev,
                usage: { ...prev.usage, dailyCount: newDaily },
                stats: { ...prev.stats, totalPromptsCopied: newTotal }
            }));
            return newDaily;
        }
        return 0;
    };

    const [userData, setUserData] = useState({ dailyCopyCount: 0 }); // Local state for UI reactivity

    // --- Favorites Logic ---
    const addFavorite = async (prompt) => {
        if (!user || !prompt?.id) return;
        const favoritesRef = doc(db, 'users', user.uid, 'favorites', prompt.id);

        await setDoc(favoritesRef, {
            promptId: prompt.id,
            genre: prompt.genre || 'Unknown',
            subGenre: prompt.subGenre || 'Unknown',
            savedAt: serverTimestamp(),
            note: ''
        });
    };

    const removeFavorite = async (promptId) => {
        if (!user || !promptId) return;
        const favoritesRef = doc(db, 'users', user.uid, 'favorites', promptId);
        await deleteDoc(favoritesRef);
    };

    // --- History Logic ---
    const addToHistory = async (genre, subGenre) => {
        if (!user) return;

        const historyCollection = collection(db, 'users', user.uid, 'history');
        await addDoc(historyCollection, {
            genre,
            subGenre,
            viewedAt: serverTimestamp()
        });
        // Limit enforcement is best handled by backend triggers or periodic cleanup
        // to avoid heavy reads/writes on every client view.
    };

    // --- Payment / Subscription Logic ---
    // --- Payment / Subscription Logic ---
    const updateSubscriptionAfterPayment = async (planType) => {
        if (!user) return;
        const userRef = doc(db, 'users', user.uid);

        // Calculate new end date
        const now = new Date();
        const endDate = new Date();
        if (planType === 'yearly') endDate.setFullYear(now.getFullYear() + 1);
        else endDate.setMonth(now.getMonth() + 1);

        const subscriptionUpdate = {
            'subscription.planId': 'pro',
            'subscription.planType': planType,
            'subscription.status': 'active',
            'subscription.startDate': serverTimestamp(),
            'subscription.endDate': endDate,
            'subscription.paymentProvider': 'razorpay',
            'subscription.autoRenew': true,
            'plan': 'pro' // Top level simple flag
        };

        // 1. Update User Profile
        await updateDoc(userRef, subscriptionUpdate);

        // 2. Add Billing Record
        try {
            const billingCollection = collection(db, 'users', user.uid, 'billing');
            await addDoc(billingCollection, {
                provider: 'razorpay',
                subscriptionId: `sub_demo_${Date.now()}`, // Placeholder for real ID
                planType: planType,
                status: 'active',
                createdAt: serverTimestamp(),
                currentPeriodEnd: endDate,
                amount: planType === 'yearly' ? 249900 : 24900,
                currency: 'INR'
            });
        } catch (e) {
            console.error("Error adding billing record:", e);
        }

        // Refresh local state
        const snap = await getDoc(userRef);
        if (snap.exists()) setUserData(snap.data());
    };

    // Sync reading on load/user change
    useEffect(() => {
        const syncUserData = async () => {
            if (user) {
                const userRef = doc(db, 'users', user.uid);
                const userSnap = await getDoc(userRef);
                const today = new Date().toISOString().split('T')[0];

                if (userSnap.exists()) {
                    const data = userSnap.data();

                    // Logic to reset daily count if it's a new day
                    let updates = {
                        lastLoginAt: serverTimestamp(),
                        lastActiveAt: serverTimestamp(),
                        emailVerified: user.emailVerified,
                        'stats.totalSessions': (data.stats?.totalSessions || 0) + 1
                    };

                    if (data.usage?.lastResetDate !== today) {
                        updates['usage.dailyCount'] = 0;
                        updates['usage.lastResetDate'] = today;
                    }

                    await updateDoc(userRef, updates);

                    // Merge updates locally for immediate UI reflect
                    setUserData({ ...data, ...updates, lastLoginAt: new Date(), lastActiveAt: new Date() });
                } else {
                    // Create NEW user doc with comprehensive schema based on Antigravity Backend Prompt
                    const newUserData = {
                        // Authentication Reference
                        uid: user.uid,
                        email: user.email,
                        emailVerified: user.emailVerified,
                        authProvider: user.providerData && user.providerData[0] ? user.providerData[0].providerId : 'password',

                        // Basic Profile
                        fullName: user.displayName || '',
                        photoURL: user.photoURL || null,
                        accountStatus: 'active', // active, suspended

                        // Account Timing
                        createdAt: serverTimestamp(),
                        lastLoginAt: serverTimestamp(),
                        lastActiveAt: serverTimestamp(),

                        // Plan & Subscription
                        subscription: {
                            planId: 'free', // Keeping planId for backward compatibility
                            planType: 'free', // free, monthly, yearly
                            status: 'active', // active, expired, canceled
                            startDate: serverTimestamp(),
                            endDate: null,
                            autoRenew: false,
                            billingCycle: 'monthly',
                            paymentProvider: null,
                            billingCountry: null // Captured from payment provider
                        },

                        // Usage Tracking
                        usage: {
                            dailyCount: 0,
                            lastResetDate: today,
                            dailyLimit: 5, // Default for free users
                        },

                        // User Preferences
                        preferences: {
                            theme: 'dark',
                            language: 'en',
                            favoriteGenres: []
                        },

                        // Badges & Feature Flags
                        badges: {
                            earlySupporter: true,
                            betaAccess: false
                        },

                        // Analytics (Privacy-Safe)
                        stats: {
                            totalPromptsCopied: 0,
                            totalSessions: 1,
                            mostUsedGenre: null,
                            lastFeatureAccessed: null,
                            earlySupporter: true
                        }
                    };

                    await setDoc(userRef, newUserData);
                    setUserData(newUserData);
                }
            } else {
                setUserData(null);
            }
        };
        syncUserData();
    }, [user]);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const sendVerificationEmail = (user) => {
        return sendEmailVerification(user);
    };

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const value = {
        user,
        userData, // Expose for UI
        signup,
        login,
        loginWithGoogle,
        logout,
        resetPassword, // Added
        incrementCopyCount,
        checkDailyLimit,
        sendVerificationEmail,
        addFavorite,
        removeFavorite,
        addToHistory,
        updateSubscriptionAfterPayment
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
