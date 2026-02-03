import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Star, Loader2 } from 'lucide-react';
import { getCurrencyConfig } from '../utils/pricing';
import { useAuth } from '../contexts/AuthContext';

const PricingModal = ({ isOpen, onClose }) => {
    const { userData, updateSubscriptionAfterPayment } = useAuth();
    const [loading, setLoading] = useState(false);
    const pricing = getCurrencyConfig();

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
        const amount = price * 100; // Amount in smallest currency unit
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
            image: "https://promptsymphony.com/logo.png",
            handler: async function (response) {
                console.log("Payment Successful", response);
                try {
                    await updateSubscriptionAfterPayment(planType);
                    alert("Upgrade Successful! Welcome to Pro.");
                    onClose();
                } catch (error) {
                    console.error("Upgrade failed:", error);
                    alert("Upgrade failed. Please contact support.");
                }
                setLoading(false);
            },
            prefill: {
                name: userData?.fullName || "",
                email: userData?.email || "",
                contact: ""
            },
            theme: {
                color: "#0891b2"
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

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 rounded-full transition-colors z-10"
                        disabled={loading}
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Left Side: Value Prop */}
                    <div className="md:w-2/5 p-8 bg-gradient-to-br from-slate-900 to-slate-800 border-r border-slate-700/50 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-overlay"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-4">Unlock Unlimited Creativity</h2>
                            <p className="text-slate-400 mb-6">
                                Free users can copy 5 prompts per day. Upgrade now to remove all limits and access exclusive features.
                            </p>

                            <ul className="space-y-3">
                                <li className="flex items-center text-slate-300">
                                    <Check className="w-5 h-5 text-cyan-400 mr-3" />
                                    Unlimited Prompt Copying
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <Check className="w-5 h-5 text-cyan-400 mr-3" />
                                    Access All Genre Generators
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <Check className="w-5 h-5 text-cyan-400 mr-3" />
                                    Priority Support
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <Check className="w-5 h-5 text-cyan-400 mr-3" />
                                    Early Access to New Genres
                                </li>
                            </ul>
                        </div>

                        <div className="relative z-10 mt-8 pt-8 border-t border-slate-700">
                            <p className="text-xs text-slate-500 text-center">
                                "The best investment for my film scoring workflow." <br /> - Hans Z., Composer
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Plans */}
                    <div className="md:w-3/5 p-8 bg-slate-950 flex flex-col justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Monthly Plan */}
                            <div
                                onClick={() => handleUpgrade('monthly')}
                                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-all cursor-pointer group"
                            >
                                <h3 className="text-lg font-semibold text-slate-300 group-hover:text-white">Monthly</h3>
                                <div className="flex items-baseline my-4">
                                    <span className="text-3xl font-bold text-white">{pricing.symbol}{pricing.monthly}</span>
                                    <span className="text-slate-500 ml-1">/mo</span>
                                </div>
                                <p className="text-xs text-slate-500 mb-4">Flexible, cancel anytime.</p>
                                <button
                                    className="w-full py-2 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors font-medium flex justify-center items-center"
                                    disabled={loading}
                                >
                                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Select Monthly'}
                                </button>
                            </div>

                            {/* Yearly Plan */}
                            <div className="relative bg-slate-900 border-2 border-cyan-500/50 rounded-xl p-6 shadow-lg shadow-cyan-900/20 transform md:scale-105 transition-transform">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-md">
                                    <Star className="w-3 h-3 mr-1 fill-current" />
                                    BEST VALUE
                                </div>
                                <h3 className="text-lg font-semibold text-white">Yearly</h3>
                                <div className="flex items-baseline my-4">
                                    <span className="text-3xl font-bold text-white">{pricing.symbol}{pricing.yearly}</span>
                                    <span className="text-slate-500 ml-1">/yr</span>
                                </div>
                                <p className="text-xs text-emerald-400 mb-4">Save 20% compared to monthly.</p>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleUpgrade('yearly');
                                    }}
                                    className="w-full py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all font-bold flex justify-center items-center"
                                    disabled={loading}
                                >
                                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Upgrade Now'}
                                </button>
                            </div>
                        </div>

                        <p className="text-center text-slate-600 text-xs mt-6">
                            Secure payment via Razorpay. Cancel anytime from your dashboard.
                        </p>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default PricingModal;
