import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, Music, GitGraph, Sparkles, BookOpen, Layers, Zap } from 'lucide-react';
import PromptCard from '../components/PromptCard';
import { useAuth } from '../contexts/AuthContext'; // Import Auth
import PricingModal from '../components/PricingModal'; // Import Modal

const SubCategoryDetail = ({ genres }) => {
    const { genreId, subId } = useParams();
    const genre = genres.find(g => g.id === genreId);
    const sub = genre?.subcategories.find(s => s.id === subId);
    const { checkDailyLimit, user, addToHistory, incrementCopyCount } = useAuth(); // Use Auth
    const [showLimitModal, setShowLimitModal] = useState(false); // State for modal
    const navigate = useNavigate();

    // Check limit on mount, Increment Usage & Track History
    useEffect(() => {
        const verifyLimitAndTrack = async () => {
            // 1. Increment Usage (treats View as a "Copy" / Usage unit)
            // This fulfills: "count to increase one by one in Today's Usage" on "sub catagry entry"
            if (user) {
                const result = await incrementCopyCount();
                if (result === -1) {
                    setShowLimitModal(true);
                    return; // Stop if limit reached
                }
            }

            // 2. Track History
            if (user && genre && sub) {
                addToHistory(genre.title, sub.title);
            }
        };
        verifyLimitAndTrack();
    }, [sub, user]); // Re-check if sub or user changes

    // State for active variation tab
    const [activeVariationId, setActiveVariationId] = useState(null);

    // Set default variation when sub changes
    useEffect(() => {
        if (sub && sub.variations?.length > 0) {
            setActiveVariationId(sub.variations[0].id);
        }
    }, [sub]);

    if (!genre || !sub) return <Navigate to="/" replace />;

    const activeVariation = sub.variations?.find(v => v.id === activeVariationId) || sub.variations?.[0];

    const isAction = genre.id === 'action';
    const theme = isAction ? {
        accent: 'text-red-500',
        accentBg: 'bg-red-500',
        accentBorder: 'border-red-500',
        gold: 'text-orange-400',
        borderGold: 'border-orange-400',
        hoverText: 'hover:text-red-500',
        activeTab: 'text-red-500',
        shadowGold: 'shadow-[0_0_15px_rgba(251,146,60,0.05)] hover:shadow-[0_0_20px_rgba(251,146,60,0.1)]',
        shadowCyan: 'shadow-[0_0_15px_rgba(239,68,68,0.05)] hover:shadow-[0_0_20px_rgba(239,68,68,0.1)]',

        promptTheme: {
            border: 'border-red-500/30',
            shadow: 'shadow-[0_0_20px_rgba(239,68,68,0.1)] hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]',
            text: 'text-red-500',
            bg: 'bg-red-500',
            bgHover: 'hover:bg-red-500',
            gold: 'selection:bg-orange-500/30'
        }
    } : {
        accent: 'text-[var(--color-cinematic-cyan)]',
        accentBg: 'bg-[var(--color-cinematic-cyan)]',
        accentBorder: 'border-[var(--color-cinematic-cyan)]',
        gold: 'text-[var(--color-cinematic-gold)]',
        borderGold: 'border-[var(--color-cinematic-gold)]',
        hoverText: 'hover:text-[var(--color-cinematic-cyan)]',
        activeTab: 'text-[var(--color-cinematic-cyan)]',
        shadowGold: 'shadow-[0_0_15px_rgba(251,191,36,0.05)] hover:shadow-[0_0_20px_rgba(251,191,36,0.1)]',
        shadowCyan: 'shadow-[0_0_15px_rgba(34,211,238,0.05)] hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]',

        promptTheme: null
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative">
            {/* Blocking Modal if limit reached */}
            <PricingModal isOpen={showLimitModal} onClose={() => {
                setShowLimitModal(false);
                navigate('/dashboard');
            }} />

            {/* Breadcrumb / Back */}
            <div className={`flex items-center gap-2 mb-8 text-sm text-slate-500 transition-opacity duration-300 ${showLimitModal ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}>
                <Link to={`/genre/${genreId}`} className={`${theme.hoverText} flex items-center gap-1 transition-colors`}>
                    <ArrowLeft size={14} /> Back to {genre.title}
                </Link>
                <span>/</span>
                <span className="text-slate-300">{sub.title}</span>
            </div>

            <div className={`flex flex-col lg:flex-row gap-12 items-start transition-opacity duration-300 ${showLimitModal ? 'opacity-20 pointer-events-none blur-sm' : 'opacity-100'}`}>

                {/* Left Col: Theory & Rules */}
                <div className="flex-1 min-w-0 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Title & Mood/Use Case */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`p-2.5 rounded-lg ${theme.accentBg}/10 ${theme.accent}`}>
                                    <Sparkles size={24} />
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-white">{sub.title}</h1>
                            </div>
                            <div className={`p-4 bg-slate-900/50 border-l-4 ${theme.borderGold} rounded-r-lg`}>
                                <h3 className={`${theme.gold} text-xs font-bold uppercase tracking-wider mb-2`}>Mood & Use Case</h3>
                                <p className="text-lg text-slate-300 leading-relaxed">
                                    {sub.moodUseCase}
                                </p>
                            </div>
                        </div>

                        {/* Core Theory Rules */}
                        {sub.coreTheory && (
                            <div className="mb-10">
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <BookOpen size={20} className={theme.accent} />
                                    Core Theory Rules
                                </h2>
                                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
                                    <TheoryItem label="Tempo range" value={sub.coreTheory.tempo} />
                                    <TheoryItem label="Rhythm style" value={sub.coreTheory.rhythm} />
                                    <TheoryItem label="Harmony character" value={sub.coreTheory.harmony} />
                                    <TheoryItem label="Melody behaviour" value={sub.coreTheory.melody} />
                                    <TheoryItem label="Orchestration focus" value={sub.coreTheory.orchestration} />
                                </div>
                            </div>
                        )}

                        {/* Mood Variations Tabs */}
                        {sub.variations && sub.variations.length > 0 && (
                            <div className="mb-8">
                                <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-slate-800 pb-1">
                                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mr-4">Mood Variation:</h3>
                                    {sub.variations.map(variation => (
                                        <button
                                            key={variation.id}
                                            onClick={() => setActiveVariationId(variation.id)}
                                            className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-all relative top-[1px] ${activeVariationId === variation.id
                                                ? `bg-slate-800 ${theme.activeTab} border-t border-x border-slate-700 z-10`
                                                : 'text-slate-400 hover:text-white hover:bg-slate-900'
                                                }`}
                                        >
                                            {variation.name}
                                        </button>
                                    ))}
                                </div>

                                <AnimatePresence mode="wait">
                                    {activeVariation && (
                                        <motion.div
                                            key={activeVariation.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="space-y-8"
                                        >
                                            {/* Recommended Scales */}
                                            <div className={`bg-slate-900 border border-slate-800 rounded-xl overflow-hidden ${theme.shadowGold} transition-shadow`}>
                                                <div className="bg-slate-950/50 p-4 border-b border-slate-800 flex items-center gap-2">
                                                    <Layers size={18} className={theme.gold} />
                                                    <h3 className="font-bold text-white">Recommended Scales</h3>
                                                </div>
                                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <span className="block text-xs text-slate-500 uppercase tracking-widest mb-1">Primary Scale</span>
                                                        <span className={`text-lg ${theme.accent} font-mono`}>{activeVariation.scales.primary}</span>
                                                    </div>
                                                    <div>
                                                        <span className="block text-xs text-slate-500 uppercase tracking-widest mb-1">Secondary / Colour</span>
                                                        <span className="text-lg text-slate-300 font-mono">{activeVariation.scales.secondary}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Chord Language */}
                                            <div className={`bg-slate-900 border border-slate-800 rounded-xl overflow-hidden ${theme.shadowCyan} transition-shadow`}>
                                                <div className="bg-slate-950/50 p-4 border-b border-slate-800 flex items-center gap-2">
                                                    <Music size={18} className={theme.accent} />
                                                    <h3 className="font-bold text-white">Chord Language & Progressions</h3>
                                                </div>
                                                <div className="p-6 space-y-6">
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-400 mb-2">Typical Chord Types</h4>
                                                        <p className="text-slate-300">{activeVariation.chords.types}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-400 mb-2">Example Progressions</h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {activeVariation.chords.progressions.map((prog, idx) => (
                                                                <span key={idx} className={`inline-block px-3 py-1.5 bg-slate-950 border border-slate-800 rounded font-mono text-sm ${theme.gold}`}>
                                                                    {prog}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Right Col: Sticky Prompt Box */}
                <div className="lg:w-[450px] flex-shrink-0 w-full">
                    <div className="lg:sticky lg:top-8 transition-all duration-300">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                        >
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Zap size={20} className={theme.gold} />
                                    AI Generation Prompt
                                </h2>
                            </div>

                            {activeVariation && (
                                <PromptCard
                                    prompt={activeVariation.prompt}
                                    promptId={activeVariation.id}
                                    theme={theme.promptTheme}
                                    genre={genre.title}
                                    subGenre={sub.title}
                                />
                            )}

                            <div className="mt-6 p-4 bg-slate-900/30 border border-slate-800 rounded-lg text-sm text-slate-500">
                                <h4 className="text-slate-400 font-semibold mb-2">How to use</h4>
                                <p>Copy this prompt into AI music generators like Suno.ai or Udio. The prompt is engineered based on the theory rules on the left to produce accurate results.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const TheoryItem = ({ label, value }) => (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-b border-slate-800/50 last:border-0 pb-2 last:pb-0">
        <span className="text-slate-500 font-medium text-sm min-w-[150px] uppercase tracking-wider flex-shrink-0">{label}</span>
        <span className="text-slate-200">{value}</span>
    </div>
);

export default SubCategoryDetail;
