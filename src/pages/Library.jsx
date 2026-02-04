import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { collection, query, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { Bookmark, Star, Minus, Plus, Trash2, Copy, Check, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { genres } from '../data/genres';
import PricingModal from '../components/PricingModal';

const Library = () => {
    const { user, checkDailyLimit } = useAuth();
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    // Filter Logic states from Dashboard
    const [expandedFav, setExpandedFav] = useState(null);
    const [showLimitModal, setShowLimitModal] = useState(false);
    const [copiedId, setCopiedId] = useState(null);
    const [favPage, setFavPage] = useState(1);

    const [selectedGenre, setSelectedGenre] = useState('All');

    // Pagination Constant
    const ITEMS_PER_PAGE = 48;

    useEffect(() => {
        const fetchFavorites = async () => {
            if (!user) {
                setLoading(false);
                return;
            }
            try {
                const favQuery = query(collection(db, 'users', user.uid, 'favorites'), orderBy('savedAt', 'desc'));
                const favSnap = await getDocs(favQuery);
                const favList = favSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setFavorites(favList);
            } catch (error) {
                console.error("Error fetching favorites:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFavorites();
    }, [user]);

    // Derived State
    const uniqueGenres = ['All', ...new Set(favorites.map(item => item.genre).filter(Boolean).sort())];

    const filteredFavorites = selectedGenre === 'All'
        ? favorites
        : favorites.filter(item => item.genre === selectedGenre);

    const totalPages = Math.ceil(filteredFavorites.length / ITEMS_PER_PAGE);

    // Reset page on filter change
    useEffect(() => {
        setFavPage(1);
    }, [selectedGenre]);

    // Helper functions from Dashboard logic
    const getPromptContent = (item) => {
        const g = genres.find(g => g.title === item.genre);
        const s = g?.subcategories.find(sub => sub.title === item.subGenre);
        if (!s) return "Prompt content not found in library.";

        let v = s.variations?.find(v => v.id === item.promptId);
        // Fallback if exact ID match fails
        if (!v && s.variations?.length > 0) v = s.variations[0];

        return v ? v.prompt : "Prompt content unavailable.";
    };

    const handleRemoveFavorite = async (id, e) => {
        e.stopPropagation();
        if (!user) return;
        try {
            await deleteDoc(doc(db, 'users', user.uid, 'favorites', id));
            setFavorites(prev => prev.filter(item => item.id !== id));
            if (expandedFav === id) setExpandedFav(null);
        } catch (error) {
            console.error("Error removing favorite:", error);
        }
    };

    const toggleExpand = (item) => {
        if (expandedFav === item.id) {
            setExpandedFav(null);
            return;
        }
        const { allowed } = checkDailyLimit();
        if (!allowed) {
            setShowLimitModal(true);
            return;
        }
        setExpandedFav(item.id);
    };

    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    if (!user) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-slate-950">
                <Bookmark size={48} className="text-slate-600 mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">My Library</h2>
                <p className="text-slate-400 mb-6">Log in to view your saved prompts.</p>
                <Link to="/login" className="px-6 py-2 bg-[var(--color-cinematic-gold)] text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors">Log In</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 pt-12 px-6 md:px-12 pb-20 max-w-7xl mx-auto">
            <PricingModal isOpen={showLimitModal} onClose={() => setShowLimitModal(false)} />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div className="flex items-center gap-3">
                        <Star className="text-amber-400 fill-amber-400/20" size={28} />
                        <div>
                            <h1 className="text-3xl font-bold text-white">My Favourite Prompts Library</h1>
                            <p className="text-slate-400 text-sm mt-1">Manage and organize your personal collection</p>
                        </div>
                    </div>

                    {/* Genre Filters */}
                    {favorites.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {uniqueGenres.map(genre => (
                                <button
                                    key={genre}
                                    onClick={() => setSelectedGenre(genre)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${selectedGenre === genre
                                        ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/50 shadow-[0_0_10px_rgba(34,211,238,0.2)]'
                                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'}`}
                                >
                                    {genre}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {loading ? (
                    <div className="h-32 bg-slate-900/30 rounded-xl animate-pulse" />
                ) : filteredFavorites.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {filteredFavorites.slice((favPage - 1) * ITEMS_PER_PAGE, favPage * ITEMS_PER_PAGE).map((item) => {
                                const isExpanded = expandedFav === item.id;
                                const content = isExpanded ? getPromptContent(item) : null;

                                return (
                                    <div key={item.id} className={`group bg-slate-900/40 border ${isExpanded ? 'border-cyan-500/50 bg-slate-900/80 shadow-lg shadow-cyan-900/20' : 'border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'} rounded-xl transition-all duration-300 overflow-hidden`}>
                                        <div className="p-4 flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="px-2 py-1 rounded bg-slate-800 text-xs text-cyan-400 font-medium border border-cyan-500/10">
                                                    {item.genre}
                                                </div>
                                                <div className="flex gap-2">
                                                    <button onClick={() => toggleExpand(item)} className={`p-1.5 rounded-lg transition-colors ${isExpanded ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>
                                                        {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                                                    </button>
                                                    <button onClick={(e) => handleRemoveFavorite(item.id, e)} className="p-1.5 text-slate-600 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                            <h3 className="text-white font-medium mb-1 text-lg">{item.subGenre}</h3>
                                            <div className="text-xs text-slate-500 mb-4">Saved {item.savedAt?.seconds ? new Date(item.savedAt.seconds * 1000).toLocaleDateString() : 'Recently'}</div>

                                            {isExpanded && (
                                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-2 pt-4 border-t border-slate-800/50">
                                                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-slate-300 text-sm font-mono leading-relaxed mb-3">
                                                        {content}
                                                    </div>
                                                    <button onClick={(e) => { e.stopPropagation(); copyToClipboard(content, item.id); }} className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                                                        {copiedId === item.id ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                                                        {copiedId === item.id ? "Copied!" : "Copy Prompt"}
                                                    </button>
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-4 mt-6">
                                <button onClick={() => { setFavPage(p => Math.max(1, p - 1)); setExpandedFav(null); }} disabled={favPage === 1} className={`p-2 rounded-lg border border-slate-800 transition-all ${favPage === 1 ? 'opacity-50 cursor-not-allowed text-slate-600' : 'hover:bg-slate-800 text-slate-300'}`}>
                                    <ChevronRight size={20} className="rotate-180" />
                                </button>
                                <span className="text-sm text-slate-500 font-medium">Page {favPage} of {totalPages}</span>
                                <button onClick={() => { setFavPage(p => Math.min(totalPages, p + 1)); setExpandedFav(null); }} disabled={favPage >= totalPages} className={`p-2 rounded-lg border border-slate-800 transition-all ${favPage >= totalPages ? 'opacity-50 cursor-not-allowed text-slate-600' : 'hover:bg-slate-800 text-slate-300'}`}>
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-8 text-center max-w-2xl mx-auto">
                        <Star className="mx-auto text-slate-700 mb-3" size={32} />
                        {selectedGenre === 'All' ? (
                            <>
                                <p className="text-slate-400 mb-1">You haven't saved any prompts yet.</p>
                                <p className="text-sm text-slate-600">Click the star icon on any prompt to save it here.</p>
                                <Link to="/browse" className="inline-block mt-4 px-4 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 hover:text-white transition-colors">Start Browsing</Link>
                            </>
                        ) : (
                            <>
                                <p className="text-slate-400 mb-1">No saved prompts found in "{selectedGenre}".</p>
                                <button onClick={() => setSelectedGenre('All')} className="inline-block mt-4 px-4 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 hover:text-white transition-colors">View AllPrompts</button>
                            </>
                        )}
                    </div>
                )}
            </motion.div>
        </div>
    );
};
export default Library;
