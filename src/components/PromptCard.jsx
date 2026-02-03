import React, { useState, useEffect } from 'react';
import { Copy, Check, Star, Music2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import PricingModal from './PricingModal';

const PromptCard = ({ prompt, promptId, theme, genre, subGenre }) => {
    const [copied, setCopied] = useState(false);
    const [sunoCopied, setSunoCopied] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();
    const { user, incrementCopyCount, checkDailyLimit, addFavorite, removeFavorite, userData, userFavorites } = useAuth();
    // Assuming we might add userFavorites to context later, or fetch it.
    // For now, let's use a local check + db calls.

    // Mock Upvote Count based on ID
    const upvoteCount = React.useMemo(() => {
        if (!promptId) return 0;
        return promptId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 950 + 42;
    }, [promptId]);

    const styles = {
        border: theme?.border || 'border-[var(--color-cinematic-cyan)]/30',
        shadow: theme?.shadow || 'shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]',
        text: theme?.text || 'text-[var(--color-cinematic-cyan)]',
        bg: theme?.bg || 'bg-[var(--color-cinematic-cyan)]',
        bgHover: theme?.bgHover || 'hover:bg-[var(--color-cinematic-cyan)]',
        gold: theme?.gold || 'selection:bg-[var(--color-cinematic-gold)]/30'
    };

    // Check if favorite exists in the potentially synced userFavorites or checking user subcollection
    // For this step, we will use a simple local state that assumes false initially unless we check DB.
    // To match strict React patterns, we probably should load favorites in AuthContext or a separate hook.
    // But to "Get it working" per request:

    const handleFavorite = async () => {
        if (!user) {
            // Optional: Prompt login
            return;
        }

        if (isFavorite) {
            await removeFavorite(promptId);
            setIsFavorite(false);
        } else {
            // We need genre/subGenre. If not passed, we defaults.
            // Ideally props.genre and props.subGenre should be passed to PromptCard
            await addFavorite({
                id: promptId,
                genre: genre || 'Unknown',
                subGenre: subGenre || 'Unknown',
                text: prompt // Optional: store text if needed
            });
            setIsFavorite(true);
        }
    };

    // Format for Suno: Strip Markdown, focus on keywords, comma separated
    // Format for Suno/Udio: Extract values from "Label: Value" pairs to create a clean tag list
    const formatForSuno = (text) => {
        // 1. Remove "Create/Compose a..." intro to strictly focus on musical data
        let clean = text.replace(/^(Create|Compose|Write) (an?|the) [\w\s\-]+ (track|song|piece)[\.\:]?/i, '');

        // 2. Extract values from "Key: Value" patterns (supports bold markers or plain text)
        const tags = [];
        const regex = /(?:\*\*|)?([a-zA-Z\s]+)(?:\*\*|):[\s\t]*([^\.\n]+)(?:[\.\n]|$)/g;

        let match;
        while ((match = regex.exec(text)) !== null) {
            // match[2] is the value (e.g. "140 BPM", "Dark")
            let val = match[2].trim();
            // Exclude non-musical metadata if needed, but usually all are good
            if (val && val.length > 1 && !match[1].toLowerCase().includes('title')) {
                tags.push(val);
            }
        }

        // 3. Fallback: If no structured tags found, use intelligent sentence reduction
        if (tags.length < 3) {
            return clean
                .replace(/\.\s+/g, ', ') // Sentences to comma list
                .replace(/:\s*/g, ' ')   // Colons to space
                .replace(/\s+/g, ' ')    // Compact whitespace
                .slice(0, 450);
        }

        return tags.join(', ');
    };

    const handleSunoCopy = async () => {
        // Similar daily limit check logic could apply here
        if (user) {
            const limitStatus = await checkDailyLimit(user.uid);
            if (!limitStatus.allowed) {
                setShowModal(true);
                return;
            }
            const result = await incrementCopyCount();
            if (result === -1) {
                setShowModal(true);
                return;
            }
        } else {
            const guestCount = parseInt(localStorage.getItem('guestCopyCount') || '0');
            if (guestCount >= 5) {
                setShowModal(true);
                return;
            }
            localStorage.setItem('guestCopyCount', (guestCount + 1).toString());
        }

        const sunoPrompt = formatForSuno(prompt);
        navigator.clipboard.writeText(sunoPrompt);
        setSunoCopied(true);
        setTimeout(() => setSunoCopied(false), 2000);
    };

    const handleCopy = async () => {
        if (user) {
            const limitStatus = await checkDailyLimit(user.uid);
            if (!limitStatus.allowed) {
                setShowModal(true);
                return;
            }
            const result = await incrementCopyCount();
            if (result === -1) {
                setShowModal(true);
                return;
            }
        } else {
            const guestCount = parseInt(localStorage.getItem('guestCopyCount') || '0');
            if (guestCount >= 5) {
                setShowModal(true);
                return;
            }
            localStorage.setItem('guestCopyCount', (guestCount + 1).toString());
        }

        navigator.clipboard.writeText(prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <div className={`bg-slate-900 border ${styles.border} rounded-xl overflow-hidden ${styles.shadow} transition-shadow duration-300`}>
                <div className="bg-slate-950/50 border-b border-slate-800 p-4 flex flex-wrap items-center justify-between gap-3">
                    <h3 className={`${styles.text} text-sm font-bold uppercase tracking-wider flex items-center gap-2`}>
                        <span className={`w-2 h-2 rounded-full ${styles.bg} animate-pulse`} />
                        Text-to-Music Prompt
                    </h3>

                    <div className="flex items-center gap-2">
                        {/* Community Upvotes (Mock) */}
                        <div className="flex items-center gap-1.5 mr-2 px-2 py-1 bg-slate-900 rounded-md border border-slate-800 text-slate-400 text-xs font-mono" title="Community Upvotes">
                            <span className="text-yellow-500">▲</span>
                            {upvoteCount}
                        </div>

                        {/* Favorite Button (Star Icon) - Quick Toggle */}
                        <button
                            onClick={handleFavorite}
                            className={`p-1.5 rounded-md border transition-all ${isFavorite
                                ? 'bg-yellow-500/10 border-yellow-500/50 text-yellow-400'
                                : 'border-transparent text-slate-500 hover:text-yellow-400 hover:bg-yellow-500/10'}`}
                            title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                        >
                            <Star size={16} fill={isFavorite ? "currentColor" : "none"} />
                        </button>

                        {/* Save Button (Explicit Text) - New addition requested */}
                        <button
                            onClick={handleFavorite}
                            className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-md border transition-all ${isFavorite
                                ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
                                : 'border-slate-700 hover:border-yellow-500/50 text-slate-400 hover:text-yellow-400 bg-transparent'}`}
                            title="Save prompt to dashboard"
                        >
                            {isFavorite ? <Check size={14} /> : <Star size={14} />}
                            {isFavorite ? 'Saved' : 'Save'}
                        </button>

                        {/* Suno / Udio / Etc Copy Button - Primary Action */}
                        <button
                            onClick={handleSunoCopy}
                            className={`flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 border border-indigo-400/30 shadow-lg shadow-indigo-500/20 transition-all`}
                            title="Auto-formats text into tags for Suno, Udio & others"
                        >
                            {sunoCopied ? <Check size={14} /> : <Music2 size={14} />}
                            {sunoCopied ? 'Ready!' : 'Suno / Udio / Etc..'}
                        </button>

                        {/* Standard Copy Button - Secondary Action */}
                        <button
                            onClick={handleCopy}
                            className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-md border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white bg-transparent transition-all`}
                            title="Copy full prompt text"
                        >
                            {copied ? <Check size={14} /> : <Copy size={14} />}
                            {copied ? 'Copied' : 'Copy'}
                        </button>
                    </div>
                </div>

                <div className="p-6 relative group">
                    <textarea
                        readOnly
                        value={prompt}
                        className={`w-full h-48 bg-transparent text-slate-300 text-base leading-relaxed resize-none focus:outline-none scrollbar-hide font-mono ${styles.gold}`}
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-slate-900/10" />
                </div>

                <div className="px-6 py-3 bg-slate-950/30 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between items-center">
                    <span>Max 200 words</span>
                    <span className="flex items-center gap-1.5 opacity-80">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                        Use "Suno / Udio" for optimized tags
                    </span>
                </div>
            </div>

            <PricingModal
                isOpen={showModal}
                onClose={() => {
                    setShowModal(false);
                    // Redirect to home page as requested when limit is reached/modal closed
                    navigate('/');
                }}
            />
        </>
    );
};

export default PromptCard;
