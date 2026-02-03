import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Shield, Trash2, Save, Moon, Sun, Bell, AlertTriangle, Loader2, CreditCard } from 'lucide-react';
import { updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import SubscriptionContent from './SubscriptionContent';

const AccountSettingsModal = ({ isOpen, onClose, initialTab = 'profile' }) => {
    const { user, userData } = useAuth();
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [activeTab, setActiveTab] = useState(initialTab);

    // Sync active tab if initialTab changes while open (optional but good)
    React.useEffect(() => {
        if (isOpen) {
            setActiveTab(initialTab);
        }
    }, [initialTab, isOpen]);

    const [formData, setFormData] = useState({
        displayName: user?.displayName || userData?.fullName || '',
        email: user?.email || '',
        theme: userData?.preferences?.theme || 'dark',
        notifications: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSaveProfile = async () => {
        setLoading(true);
        setSuccessMsg('');
        try {
            // Update Auth Profile
            if (user && formData.displayName !== user.displayName) {
                await updateProfile(user, {
                    displayName: formData.displayName
                });
            }

            // Update Firestore Profile
            if (user) {
                const userRef = doc(db, 'users', user.uid);
                await updateDoc(userRef, {
                    fullName: formData.displayName,
                    'preferences.theme': formData.theme,
                    // 'preferences.notifications': formData.notifications // Example
                });
            }

            setSuccessMsg('Profile updated successfully!');
            setTimeout(() => setSuccessMsg(''), 3000);
        } catch (error) {
            console.error("Error updating profile:", error);
            setSuccessMsg('Failed to update profile.');
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordReset = async () => {
        if (!user?.email) return;
        setLoading(true);
        setSuccessMsg('');
        try {
            await sendPasswordResetEmail(auth, user.email);
            setSuccessMsg(`Password reset email sent to ${user.email}`);
            setTimeout(() => setSuccessMsg(''), 5000);
        } catch (error) {
            console.error("Error sending password reset:", error);
            setSuccessMsg('Failed to send reset email. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteAccount = () => {
        if (window.confirm("Are you sure you want to delete your account? This action is irreversible and will delete all your data.")) {
            alert("Account deletion request submitted. (This is a demo action)");
            // In production: call a Cloud Function to clean up data and delete Auth user.
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-slate-900/50">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <SettingsIcon className="text-slate-400" /> Account Settings
                        </h2>
                        <button onClick={onClose} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex flex-1 overflow-hidden">
                        {/* Sidebar Tabs */}
                        <div className="w-48 bg-slate-950 border-r border-slate-700 p-4 hidden md:flex flex-col gap-2">
                            <TabButton
                                active={activeTab === 'profile'}
                                onClick={() => setActiveTab('profile')}
                                icon={<User size={16} />}
                                label="Profile"
                            />
                            <TabButton
                                active={activeTab === 'danger'}
                                onClick={() => setActiveTab('danger')}
                                icon={<Shield size={16} />}
                                label="Security"
                            />
                            <TabButton
                                active={activeTab === 'subscription'}
                                onClick={() => setActiveTab('subscription')}
                                icon={<CreditCard size={16} />}
                                label="Plan & Billing"
                            />
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 p-6 overflow-y-auto custom-scrollbar bg-slate-900">

                            {/* Mobile Tabs */}
                            <div className="md:hidden flex gap-2 mb-6 overflow-x-auto pb-2 border-b border-slate-800">
                                <TabButtonMobile active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} label="Profile" />
                                <TabButtonMobile active={activeTab === 'subscription'} onClick={() => setActiveTab('subscription')} label="Plan" />
                                <TabButtonMobile active={activeTab === 'danger'} onClick={() => setActiveTab('danger')} label="Security" />
                            </div>

                            {activeTab === 'profile' && (
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                            {user?.photoURL ? <img src={user.photoURL} alt="Avatar" className="w-full h-full rounded-full object-cover" /> : formData.displayName[0] || 'U'}
                                        </div>
                                        <div>
                                            <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-sm font-medium text-slate-300 transition-colors">
                                                Change Avatar
                                            </button>
                                            <p className="text-xs text-slate-500 mt-2">JPG, GIF or PNG. Max size 2MB.</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-400 mb-1">Display Name</label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                                                <input
                                                    type="text"
                                                    name="displayName"
                                                    value={formData.displayName}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-400 mb-1">Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    disabled
                                                    className="w-full bg-slate-950/50 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-slate-500 cursor-not-allowed"
                                                />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                                    Verified
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-slate-800">
                                        <button
                                            onClick={handleSaveProfile}
                                            disabled={loading}
                                            className="flex items-center gap-2 px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {loading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                                            Save Changes
                                        </button>
                                        {successMsg && <span className="text-emerald-400 text-sm ml-4 animate-fade-in">{successMsg}</span>}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'danger' && (
                                <div className="space-y-6">
                                    {/* Password Section */}
                                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                                        <h3 className="text-white font-medium flex items-center gap-2 mb-3">
                                            <Shield size={18} className="text-cyan-400" /> Password & Authentication
                                        </h3>
                                        <p className="text-sm text-slate-400 mb-4">
                                            Receive an email to reset your password securely.
                                        </p>
                                        <button
                                            onClick={handlePasswordReset}
                                            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors border border-slate-700"
                                        >
                                            Send Password Reset Email
                                        </button>
                                        {successMsg && activeTab === 'danger' && <p className="text-emerald-400 text-sm mt-2">{successMsg}</p>}
                                    </div>

                                    {/* Danger Zone */}
                                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                                        <h3 className="text-red-400 font-bold flex items-center gap-2 mb-2">
                                            <AlertTriangle size={18} /> Danger Zone
                                        </h3>
                                        <p className="text-sm text-red-300/80 mb-4">
                                            Permanently delete your account and all of your content. This action is not reversible, so please continue with caution.
                                        </p>
                                        <button
                                            onClick={handleDeleteAccount}
                                            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
                                        >
                                            <Trash2 size={16} /> Delete Account
                                        </button>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'subscription' && (
                                <SubscriptionContent />
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

// UI Helpers
const SettingsIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
);

const TabButton = ({ active, onClick, icon, label }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${active ? 'bg-slate-800 text-white border border-slate-700' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
    >
        <span className={active ? 'text-cyan-400' : ''}>{icon}</span>
        {label}
    </button>
);

const TabButtonMobile = ({ active, onClick, label }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${active ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'
            }`}
    >
        {label}
    </button>
);

export default AccountSettingsModal;
