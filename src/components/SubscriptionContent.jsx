import React, { useState, useEffect } from 'react';
import { Check, Star, Zap, Shield, CreditCard, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { getCurrencyConfig } from '../utils/pricing';

const SubscriptionContent = () => {
    const { userData, updateSubscriptionAfterPayment } = useAuth();
    const [loading, setLoading] = useState(false);
    const [billingCycle, setBillingCycle] = useState('monthly'); // monthly | yearly
    const [pricing, setPricing] = useState(getCurrencyConfig());

    useEffect(() => {
        setPricing(getCurrencyConfig());
    }, []);

    const isPro = userData?.subscription?.planType === 'pro' || userData?.subscription?.planId === 'pro';

    const loadRazorpay = () => {
        return new Promise((resolve) => {
            if (window.Razorpay) {
                resolve(true);
                return;
            }
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handleUpgrade = async (planType) => {
        setLoading(true);

        const res = await loadRazorpay();

        if (!res) {
            alert('Razorpay SDK failed to load. Please check your internet connection and try again.');
            setLoading(false);
            return;
        }

        const price = planType === 'yearly' ? pricing.yearly : pricing.monthly;
        const amount = price * 100; // Amount in smallest currency unit (paise or cents)
        const currency = pricing.code;

        const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;

        if (!razorpayKey) {
            alert("Payment Gateway Error: Invalid Key. Please contact support.");
            console.error("VITE_RAZORPAY_KEY_ID is missing from environment variables.");
            setLoading(false);
            return;
        }

        const options = {
            key: razorpayKey,
            amount: amount,
            currency: currency,
            name: "PromptSymphonyAI",
            description: `Pro ${planType === 'yearly' ? 'Yearly' : 'Monthly'} Subscription`,
            image: "https://promptsymphony.com/logo.png", // specific logo if available
            handler: async function (response) {
                // Success Handler
                console.log("Payment Successful", response);

                // Securely, you would verify signature on backend.
                // For MVP/Demo, we update directly.
                try {
                    await updateSubscriptionAfterPayment(planType === 'yearly' ? 'yearly' : 'monthly');
                    alert("Upgrade Successful! Welcome to Pro.");
                } catch (error) {
                    console.error("Upgrade failed:", error);
                    alert("Upgrade failed. Please contact support.");
                }
                setLoading(false);
            },
            prefill: {
                name: userData?.fullName || "",
                email: userData?.email || "",
                contact: "" // Ask user?
            },
            theme: {
                color: "#0891b2" // Cyan-600
            },
            modal: {
                ondismiss: function () {
                    setLoading(false);
                }
            }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response) {
            alert("Payment Failed: " + response.error.description);
            setLoading(false);
        });
        rzp1.open();
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Star className="text-amber-400" fill="currentColor" size={20} /> Subscription & Billing
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                    Manage your plan and billing details.
                </p>
            </div>

            {/* Current Plan Badge */}
            <div className={`p-4 rounded-xl border ${isPro ? 'bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-cyan-500/30' : 'bg-slate-900 border-slate-700'}`}>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-slate-400">Current Plan</p>
                        <h4 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                            {isPro ? 'Pro Member' : 'Free Tier'}
                            {isPro && <span className="bg-cyan-500 text-white text-[10px] px-2 py-0.5 rounded-full">ACTIVE</span>}
                        </h4>
                    </div>
                    {isPro ? (
                        <div className="text-right">
                            <p className="text-sm text-slate-400">Renews on</p>
                            <p className="text-white font-medium">
                                {userData?.subscription?.endDate?.seconds
                                    ? new Date(userData.subscription.endDate.seconds * 1000).toLocaleDateString()
                                    : 'Lifetime'}
                            </p>
                        </div>
                    ) : (
                        <p className="text-sm text-amber-500 font-medium">Limited Access</p>
                    )}
                </div>
            </div>

            {/* Pricing Toggle */}
            {!isPro && (
                <div className="flex justify-center my-6">
                    <div className="bg-slate-950 p-1 rounded-lg flex items-center border border-slate-800">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${billingCycle === 'yearly' ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                        >
                            Yearly
                            <span className="text-[10px] bg-amber-500 text-black px-1.5 rounded font-bold">-16%</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Plans Grid */}
            <div className="grid md:grid-cols-2 gap-4">
                {/* Free Plan */}
                <div className={`p-5 rounded-xl border transition-all ${!isPro ? 'bg-slate-800 border-cyan-500/50 ring-1 ring-cyan-500/20' : 'bg-slate-900 border-slate-800 opacity-70'}`}>
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h4 className="text-white font-bold text-lg">Starter</h4>
                            <p className="text-slate-400 text-sm">For casual explorers</p>
                        </div>
                        <div className="text-2xl font-bold text-white">{pricing.symbol}0</div>
                    </div>
                    <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-2 text-sm text-slate-300">
                            <Check size={16} className="text-cyan-400 mt-0.5" />
                            <span>5 Prompt Copies / Day</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-300">
                            <Check size={16} className="text-cyan-400 mt-0.5" />
                            <span>Basic Categories Access</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-300">
                            <Check size={16} className="text-cyan-400 mt-0.5" />
                            <span>Community Support</span>
                        </li>
                    </ul>
                    {isPro ? (
                        <button disabled className="w-full py-2 rounded-lg bg-slate-800 text-slate-500 text-sm font-medium cursor-not-allowed">
                            Downgrade not available
                        </button>
                    ) : (
                        <button disabled className="w-full py-2 rounded-lg bg-slate-700 text-white text-sm font-medium cursor-default border border-slate-600">
                            Current Plan
                        </button>
                    )}
                </div>

                {/* Pro Plan */}
                <div className={`p-5 rounded-xl border transition-all relative overflow-hidden ${isPro ? 'bg-slate-900 border-emerald-500/50' : 'bg-gradient-to-b from-slate-800 to-slate-900 border-amber-500/50 ring-1 ring-amber-500/10'}`}>
                    {!isPro && <div className="absolute top-0 right-0 bg-amber-500 text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>}
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h4 className="text-white font-bold text-lg flex items-center gap-2">
                                Pro <Zap size={16} className="text-amber-400" fill="currentColor" />
                            </h4>
                            <p className="text-slate-400 text-sm">For serious creators</p>
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-bold text-white">
                                {billingCycle === 'monthly'
                                    ? `${pricing.symbol}${pricing.monthly}`
                                    : `${pricing.symbol}${pricing.yearly.toLocaleString()}`}
                            </div>
                            <div className="text-xs text-slate-500">
                                {billingCycle === 'monthly' ? '/month' : '/year'}
                            </div>
                        </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-2 text-sm text-white">
                            <Check size={16} className="text-emerald-400 mt-0.5" />
                            <span className="font-medium">Unlimited Prompt Copies</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-white">
                            <Check size={16} className="text-emerald-400 mt-0.5" />
                            <span>Unlimited Favorites & History</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-white">
                            <Check size={16} className="text-emerald-400 mt-0.5" />
                            <span>Early Access to New Features</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-white">
                            <Check size={16} className="text-emerald-400 mt-0.5" />
                            <span>Priority Support</span>
                        </li>
                    </ul>

                    {isPro ? (
                        <button className="w-full py-2 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-600/50 text-sm font-medium flex items-center justify-center gap-2">
                            <Check size={16} /> Plan Active
                        </button>
                    ) : (
                        <button
                            onClick={() => handleUpgrade(billingCycle)}
                            disabled={loading}
                            className="w-full py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-sm font-bold shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                        >
                            {loading ? <Loader2 size={18} className="animate-spin" /> : <Zap size={18} fill="currentColor" />}
                            Upgrade to Pro
                        </button>
                    )}
                </div>
            </div>

            {/* Secure Payment Note */}
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-4 border-t border-slate-800">
                <Shield size={12} />
                <span>Secure payments via Razorpay. Cancel anytime.</span>
            </div>
        </div>
    );
};

export default SubscriptionContent;
