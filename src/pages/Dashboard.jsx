import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    CreditCard, Sparkles, LogOut, CheckCircle, BarChart3,
    Clock, Settings, Shield, ExternalLink
} from 'lucide-react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import AccountSettingsModal from '../components/AccountSettingsModal';
import { genres } from '../data/genres';

const Dashboard = () => {
    const { user, userData, logout } = useAuth();
    const navigate = useNavigate();
    const [history, setHistory] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    const [showSettings, setShowSettings] = useState(false);
    const [settingsTab, setSettingsTab] = useState('profile');

    const planId = userData?.subscription?.planType || 'free';
    const isPro = planId !== 'free';
    const planName = isPro ? (planId === 'monthly' ? 'Pro Monthly' : 'Pro Yearly') : 'Free Plan';

    const dailyLimit = isPro ? 1000 : 5;
    const dailyCount = userData?.usage?.dailyCount || 0;
    const totalCopied = userData?.stats?.totalPromptsCopied || 0;
    const progressPercent = Math.min((dailyCount / dailyLimit) * 100, 100);

    useEffect(() => {
        const fetchData = async () => {
            if (!user) return;

            try {
                const historyLimit = isPro ? 50 : 10;
                const histQuery = query(
                    collection(db, 'users', user.uid, 'history'),
                    orderBy('viewedAt', 'desc'),
                    limit(historyLimit)
                );
                const histSnap = await getDocs(histQuery);
                const histList = histSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setHistory(histList);

            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            } finally {
                setLoadingData(false);
            }
        };

        fetchData();
    }, [user, isPro]);

    if (!user) {
        return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading Studio...</div>;
    }

    return (
        <div className="min-h-screen bg-slate-950 pt-24 px-6 md:px-12 pb-20">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* 1. Welcome Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-3xl md:text-4xl font-bold text-white">
                                Welcome back, {userData?.fullName?.split(' ')[0] || 'Composer'}
                            </h1>
                            {userData?.badges?.earlySupporter && (
                                <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-xs font-medium border border-amber-500/20 rounded-full flex items-center">
                                    <Shield size={10} className="mr-1" /> Early Supporter
                                </span>
                            )}
                        </div>
                        <p className="text-slate-400">Manage your seamless creative workflow.</p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => navigate('/browse')}
                            className="flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium transition-all"
                        >
                            <Sparkles size={16} className="mr-2 text-cyan-400" />
                            Explore Genres
                        </button>
                        <button
                            onClick={() => { setSettingsTab('profile'); setShowSettings(true); }}
                            className="flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium transition-all"
                        >
                            <Settings size={16} className="mr-2 text-slate-400" />
                            Account Settings
                        </button>
                        <button
                            onClick={async () => {
                                await logout();
                                navigate('/login');
                            }}
                            className="flex items-center px-4 py-2 border border-red-500/20 hover:bg-red-500/10 text-red-400 rounded-lg text-sm font-medium transition-all"
                        >
                            <LogOut size={16} className="mr-2" />
                            Sign Out
                        </button>
                    </div>
                </motion.div>

                {/* 2. Top Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Usage Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-slate-400 text-sm font-medium mb-1">Today's Usage</h3>
                                <div className="text-2xl font-bold text-white flex items-baseline gap-2">
                                    {isPro ? 'Unlimited' : `${dailyCount} / ${dailyLimit}`}
                                    <span className="text-xs text-slate-500 font-normal">prompts copied</span>
                                </div>
                            </div>
                            <div className="p-2 bg-cyan-500/10 rounded-lg">
                                <BarChart3 className="text-cyan-400" size={20} />
                            </div>
                        </div>

                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-3">
                            {isPro ? (
                                <div className="h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse relative">
                                    <div className="absolute inset-0 bg-white/10" />
                                </div>
                            ) : (
                                <div
                                    className={`h-full rounded-full transition-all duration-500 ${dailyCount >= dailyLimit ? 'bg-red-500' : 'bg-cyan-500'}`}
                                    style={{ width: `${progressPercent}%` }}
                                />
                            )}
                        </div>

                        {!isPro ? (
                            <button
                                onClick={() => { setSettingsTab('subscription'); setShowSettings(true); }}
                                className="w-full py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-bold rounded-lg shadow-lg shadow-cyan-900/20 hover:shadow-cyan-900/40 hover:scale-[1.02] transition-all">
                                Upgrade Limit
                            </button>
                        ) : (
                            <div className="flex items-center text-xs text-emerald-400">
                                <CheckCircle size={12} className="mr-1.5" />
                                Active Pro License
                            </div>
                        )}
                    </motion.div>

                    {/* Subscription Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-sm"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-slate-400 text-sm font-medium mb-1">Current Plan</h3>
                                <div className="text-2xl font-bold text-white">{planName}</div>
                            </div>
                            <div className="p-2 bg-purple-500/10 rounded-lg">
                                <CreditCard className="text-purple-400" size={20} />
                            </div>
                        </div>

                        <div className="space-y-3">
                            {isPro ? (
                                <div className="text-sm text-slate-400">
                                    Renews on <span className="text-white">Feb 28, 2026</span>
                                </div>
                            ) : (
                                <div className="text-xs text-slate-500">
                                    Unlock unlimited prompts, favorites, and history.
                                </div>
                            )}

                            {isPro ? (
                                <button
                                    onClick={() => { setSettingsTab('subscription'); setShowSettings(true); }}
                                    className="w-full py-2 border border-slate-700 hover:bg-slate-800 text-slate-300 text-sm font-medium rounded-lg transition-all">
                                    Manage Subscription
                                </button>
                            ) : (
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        onClick={() => { setSettingsTab('subscription'); setShowSettings(true); }}
                                        className="py-2 border border-purple-500/30 hover:bg-purple-500/10 text-purple-300 text-xs font-medium rounded-lg transition-all">
                                        Monthly ($3)
                                    </button>
                                    <button
                                        onClick={() => { setSettingsTab('subscription'); setShowSettings(true); }}
                                        className="py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium rounded-lg transition-all">
                                        Yearly ($30)
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Profile Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                                {user.photoURL ? <img src={user.photoURL} className="w-full h-full rounded-full object-cover" alt="Profile" /> : userData?.fullName?.[0] || 'U'}
                            </div>
                            <div>
                                <div className="text-white font-medium">{userData?.fullName || 'User'}</div>
                                <div className="text-xs text-slate-500">{user.email}</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/50">
                            <div>
                                <div className="text-xs text-slate-500 mb-1">Total Prompts</div>
                                <div className="text-lg font-bold text-white">{totalCopied}</div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 mb-1">Member Since</div>
                                <div className="text-lg font-bold text-white">
                                    {userData?.createdAt?.seconds
                                        ? new Date(userData.createdAt.seconds * 1000).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
                                        : (user?.metadata?.creationTime
                                            ? new Date(user.metadata.creationTime).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
                                            : 'Just joined')}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 3. Recently Viewed Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Clock className="text-purple-400" size={20} />
                        <h2 className="text-xl font-bold text-white">Recently Viewed</h2>
                    </div>

                    <div className="bg-slate-900/30 border border-slate-800 rounded-xl overflow-hidden">
                        {loadingData ? (
                            <div className="p-4 space-y-4">
                                {[1, 2, 3].map(i => <div key={i} className="h-10 bg-slate-800/30 rounded animate-pulse" />)}
                            </div>
                        ) : history.length > 0 ? (
                            <div className="divide-y divide-slate-800/50">
                                {history.map((item) => {
                                    const g = genres.find(g => g.title === item.genre);
                                    const s = g?.subcategories.find(sub => sub.title === item.subGenre);
                                    const canNavigate = g && s;

                                    return (
                                        <div
                                            key={item.id}
                                            onClick={() => canNavigate && navigate(`/genre/${g.id}/${s.id}`)}
                                            className={`p-4 flex items-center justify-between hover:bg-slate-800/20 transition-colors ${canNavigate ? 'cursor-pointer hover:bg-slate-800/40' : ''}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-cyan-500/50" />
                                                <div>
                                                    <div className="text-slate-200 font-medium text-sm group-hover:text-cyan-400 transition-colors">
                                                        {item.subGenre}
                                                        {canNavigate && <ExternalLink size={12} className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500" />}
                                                    </div>
                                                    <div className="text-xs text-slate-500">{item.genre}</div>
                                                </div>
                                            </div>
                                            <div className="text-xs text-slate-500">
                                                {item.viewedAt?.seconds ? new Date(item.viewedAt.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Just now'}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="p-8 text-center text-slate-500 text-sm">
                                Your recently viewed prompts will appear here.
                            </div>
                        )}
                    </div>
                </motion.div>

                <div className="border-t border-slate-800/50 pt-8 pb-4">
                    <div className="flex items-center justify-center text-slate-400">
                        <span className="text-xs text-slate-600">PromptSymphonyAI v1.0.0</span>
                    </div>
                </div>

            </div>

            <AccountSettingsModal
                isOpen={showSettings}
                onClose={() => setShowSettings(false)}
                initialTab={settingsTab}
            />
        </div>
    );
};

export default Dashboard;
