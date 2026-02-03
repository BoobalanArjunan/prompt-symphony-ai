import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Music, Music2, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

// Genre-specific mood mappings for high-quality filtering
const GENRE_MOODS = {
    action: ['Explosive', 'Relentless', 'Heroic', 'Adrenaline', 'Combat', 'Tense', 'Violent', 'Chase', 'Impactful', 'Fierce'],
    adventure: ['Sweeping', 'Majestic', 'Wondrous', 'Discovery', 'Journey', 'Noble', 'Breathtaking', 'Triumphant', 'Exotic', 'Brave'],
    suspense: ['Tense', 'Uneasy', 'Anticipatory', 'Paranoid', 'Shadowy', 'Nail-biting', 'Creeping', 'Watchful', 'Anxious', 'Pending'],
    horror: ['Terrifying', 'Eerie', 'Macabre', 'Nightmarish', 'Unsettling', 'Dread', 'Haunted', 'Demonic', 'Blood-curdling', 'Psychological'],
    comedy: ['Quirky', 'Playful', 'Bouncy', 'Silly', 'Whimsical', 'Slapstick', 'Mischievous', 'Lighthearted', 'Goofy', 'Absurd'],
    romance: ['Passionate', 'Tender', 'Intimate', 'Bittersweet', 'Dreamy', 'Sentimental', 'Yearning', 'Affectionate', 'Warm', 'Loving'],
    sadness: ['Melancholic', 'Sorrowful', 'Grieving', 'Lonely', 'Bleak', 'Tragic', 'Heartbreaking', 'Empty', 'Desolate', 'Fragile'],
    fantasy: ['Magical', 'Enchanted', 'Ethereal', 'Mystical', 'Otherworldly', 'Ancient', 'Spellbinding', 'Fairytale', 'Sparkling', 'Wonder'],
    inspirational: ['Uplifting', 'Hopeful', 'Rising', 'Motivating', 'Empowering', 'Soaring', 'Bright', 'Successful', 'Optimistic', 'Proud'],
    gaming: ['Retro', '8-Bit', 'Boss-Battle', 'Immersive', 'Competitive', 'Level-Up', 'Digital', 'Arcade', 'Glitchy', 'High-Speed'],
    scifi: ['Futuristic', 'Cyberpunk', 'High-Tech', 'Alien', 'Dystopian', 'Interstellar', 'Synthetic', 'Neon', 'Quantum', 'Advanced'],
    epic: ['Colossal', 'Legendary', 'Monumental', 'Glorious', 'Earth-shattering', 'Titan', 'Cinematic', 'Heroic', 'Massive', 'Powerful'],
    mystery: ['Enigmatic', 'Noir', 'Investigative', 'Secretive', 'Puzzling', 'Shadowy', 'Curious', 'Unsolved', 'Hidden', 'Suspicious'],
    surreal: ['Dreamlike', 'Abstract', 'Bizarre', 'Trippy', 'Floating', 'Distorted', 'Hypnagogic', 'Warped', 'Subconscious', 'Psychedelic'],
    ritual: ['Ancient', 'Tribal', 'Ceremonial', 'Shamanic', 'Trancelike', 'Primal', 'Sacred', 'Dark', 'Chanting', 'Spiritual'],
    industrial: ['Mechanical', 'Gritty', 'Harsh', 'Cold', 'Metallic', 'Factory', 'Relentless', 'Brutal', 'Rusty', 'Dehumanized'],
    mythic: ['Godlike', 'Fabled', 'Folklore', 'Timeless', 'Saga', 'Olympian', 'Norse', 'Legendary', 'Dynastic', 'Heroic'],
    minimalist: ['Repetitive', 'Hypnotic', 'Sparse', 'Clean', 'Patterned', 'Subtle', 'Focus', 'Organic', 'Pure', 'Understated'],
    glitch: ['Broken', 'Erratic', 'Corrupted', 'Digital', 'Chaotic', 'Fragmented', 'Stuttering', 'Malfunctioning', 'Unstable', 'Destroyed'],
    celestial: ['Divine', 'Infinite', 'Floating', 'Stellar', 'Heavenly', 'Serene', 'Cosmic', 'Weightless', 'Radiant', 'Blissful'],
    edm: ['Hypnotic', 'Euphoric', 'Futuristic', 'Industrial', 'Glitchy', 'Ritualistic', 'Cybernetic', 'Aggressive', 'Pumping', 'Hard-hitting']
};

const GenreList = ({ genres }) => {
    const { genreId } = useParams();
    const genre = genres.find(g => g.id === genreId);

    // State for filtering
    const [searchTerm, setSearchTerm] = useState('');
    const [moodFilter, setMoodFilter] = useState('All');
    const [tempoFilter, setTempoFilter] = useState('All');

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 48;

    if (!genre) return <div className="p-8 text-center text-slate-500">Genre not found</div>;

    // Get specific moods for this genre, fallback to a generic list if missing
    const availableMoods = GENRE_MOODS[genre.id] || GENRE_MOODS.action;

    // ... (rest of component logic remains, but we replace the SELECT options below)

    // Inside the JSX return:


    const isAction = genre.id === 'action';
    const isEDM = genre.id === 'edm';

    // Theme values
    let theme;
    if (isAction) {
        theme = {
            accent: 'text-red-500',
            accentHover: 'group-hover:text-red-500',
            bgHover: 'group-hover:bg-red-500/20',
            borderHover: 'hover:border-red-500/50',
            shadowHover: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]',
            glow: 'bg-red-600/10',
            iconBg: 'text-red-500',
            gold: 'text-orange-400',
            inputBorder: 'focus:border-red-500',
        };
    } else if (isEDM) {
        theme = {
            accent: 'text-fuchsia-400',
            accentHover: 'group-hover:text-fuchsia-400',
            bgHover: 'group-hover:bg-fuchsia-500/20',
            borderHover: 'hover:border-fuchsia-500/50',
            shadowHover: 'hover:shadow-[0_0_30px_rgba(232,121,249,0.3)]',
            glow: 'bg-fuchsia-600/20',
            iconBg: 'text-fuchsia-400',
            gold: 'text-cyan-400',
            inputBorder: 'focus:border-fuchsia-500',
        };
    } else {
        theme = {
            accent: 'text-[var(--color-cinematic-cyan)]',
            accentHover: 'group-hover:text-[var(--color-cinematic-cyan)]',
            bgHover: 'group-hover:bg-[var(--color-cinematic-cyan)]/20',
            borderHover: 'hover:border-[var(--color-cinematic-cyan)]/50',
            shadowHover: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]',
            glow: 'bg-[var(--color-cinematic-cyan)]/10',
            iconBg: 'text-[var(--color-cinematic-gold)]',
            gold: 'text-[var(--color-cinematic-gold)]',
            inputBorder: 'focus:border-[var(--color-cinematic-cyan)]',
        };
    }

    // Correcting borderHover for non-action based on original file content
    if (!isAction && !isEDM) {
        theme.borderHover = 'hover:border-[var(--color-cinematic-cyan)]/50';
    }

    // Filter Logic
    const filteredSubcategories = (genre.subcategories || []).filter(sub => {
        // Text Search
        const matchesSearch = sub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (sub.moodUseCase && sub.moodUseCase.toLowerCase().includes(searchTerm.toLowerCase()));

        // Mood Filter (Check tags or implicit mood text)
        let matchesMood = true;
        if (moodFilter !== 'All') {
            const moodText = (sub.moodUseCase || '') + (sub.tags ? sub.tags.join(' ') : '');
            matchesMood = moodText.toLowerCase().includes(moodFilter.toLowerCase());
        }

        // Tempo Filter (Check tags or coreTheory.tempo)
        let matchesTempo = true;
        if (tempoFilter !== 'All') {
            const tempoText = (sub.coreTheory?.tempo || '') + (sub.tags ? sub.tags.join(' ') : '');
            // "Fast", "Slow", "Medium" check
            if (tempoFilter === 'Very Fast') matchesTempo = tempoText.toLowerCase().includes('very fast') || tempoText.includes('160') || tempoText.includes('170') || tempoText.includes('180');
            else if (tempoFilter === 'Fast') matchesTempo = (tempoText.toLowerCase().includes('fast') && !tempoText.toLowerCase().includes('very')) || tempoText.includes('130') || tempoText.includes('140') || tempoText.includes('150');
            else if (tempoFilter === 'Very Slow') matchesTempo = tempoText.toLowerCase().includes('very slow') || tempoText.includes('40') || tempoText.includes('50');
            else if (tempoFilter === 'Slow') matchesTempo = (tempoText.toLowerCase().includes('slow') && !tempoText.toLowerCase().includes('very')) || tempoText.includes('60') || tempoText.includes('70') || tempoText.includes('80') || tempoText.includes('90');
            else if (tempoFilter === 'Medium') matchesTempo = !tempoText.toLowerCase().includes('fast') && !tempoText.toLowerCase().includes('slow') && !tempoText.toLowerCase().includes('very') && !tempoText.toLowerCase().includes('epic');
            else if (tempoFilter === 'Epic') matchesTempo = tempoText.toLowerCase().includes('epic') || tempoText.includes('140');
        }

        return matchesSearch && matchesMood && matchesTempo;
    });

    // Pagination Logic
    const totalItems = filteredSubcategories.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredSubcategories.slice(startIndex, endIndex);

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, moodFilter, tempoFilter, genreId]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="mb-10 text-center relative">
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 ${theme.glow} blur-[80px] rounded-full pointer-events-none`} />
                <div className="inline-block p-4 rounded-full bg-slate-900/50 mb-4 border border-slate-800 shadow-lg">
                    <genre.icon size={48} className={theme.iconBg} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-4">
                    {genre.title}
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
                    {genre.description}
                </p>

                {/* Search and Filter Controls */}
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input
                            type="text"
                            placeholder={`Search ${genre.title} scenarios...`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={`w-full bg-slate-900 border border-slate-800 rounded-lg py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:ring-1 ${theme.inputBorder} transition-all`}
                        />
                    </div>
                    <div className="flex gap-4">
                        <select
                            value={moodFilter}
                            onChange={(e) => setMoodFilter(e.target.value)}
                            className={`bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:ring-1 ${theme.inputBorder} cursor-pointer`}
                        >
                            <option value="All">All Moods</option>
                            {availableMoods.map(mood => (
                                <option key={mood} value={mood}>{mood}</option>
                            ))}
                        </select>
                        <select
                            value={tempoFilter}
                            onChange={(e) => setTempoFilter(e.target.value)}
                            className={`bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:ring-1 ${theme.inputBorder} cursor-pointer`}
                        >
                            <option value="All">All Tempos</option>
                            <option value="Very Slow">Very Slow</option>
                            <option value="Slow">Slow</option>
                            <option value="Medium">Medium</option>
                            <option value="Fast">Fast</option>
                            <option value="Very Fast">Very Fast</option>
                            <option value="Epic">Epic</option>
                        </select>
                    </div>
                </div>
                <div className="mt-4 text-xs text-slate-500 uppercase tracking-widest">
                    Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems} results
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {currentItems.map((sub, index) => (
                    <motion.div
                        key={sub.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: Math.min(index * 0.05, 0.5) }} // Cap delay for large lists
                    >
                        <Link
                            to={`/genre/${genre.id}/${sub.id}`}
                            className={`group block h-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden ${theme.borderHover} transition-all duration-300 ${theme.shadowHover} relative`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                            <div className="p-6 relative z-10 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-2 bg-slate-800/50 rounded-lg ${theme.bgHover} transition-colors`}>
                                        <Music size={24} className={`text-slate-300 ${theme.accentHover} transition-colors`} /> {/* Fixed Icon */}
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-xs font-mono px-2 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800">
                                            {sub.variations?.[0]?.name || 'Standard'}
                                        </span>
                                    </div>
                                </div>

                                <h3 className={`text-xl font-bold text-white mb-2 ${theme.accentHover} transition-colors line-clamp-2`}>
                                    {sub.title}
                                </h3>

                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-slate-400">
                                        <Clock size={14} className={theme.gold} />
                                        {sub.coreTheory?.tempo || 'Varies'}
                                    </div>
                                    {/* Brief theory snippet */}
                                    <p className="text-sm text-slate-500 line-clamp-2">
                                        {sub.coreTheory?.orchestration || ''}
                                    </p>
                                </div>

                                <div className={`mt-auto flex items-center ${isAction ? 'text-red-500' : isEDM ? 'text-fuchsia-400' : 'text-[var(--color-cinematic-cyan)]'} text-sm font-medium gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                                    Open Guide <ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                    <button
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                        <ChevronsLeft size={20} />
                    </button>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <span className="text-sm text-slate-400 px-4">
                        Page <span className="text-white font-bold">{currentPage}</span> of <span className="text-white font-bold">{totalPages}</span>
                    </span>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                        <ChevronRight size={20} />
                    </button>
                    <button
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                        <ChevronsRight size={20} />
                    </button>
                </div>
            )}

            {filteredSubcategories.length === 0 && (
                <div className="text-center py-12 text-slate-500">
                    No results found matching your filters.
                </div>
            )}
        </div>
    );
};

export default GenreList;
