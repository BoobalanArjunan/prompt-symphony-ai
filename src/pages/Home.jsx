import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = ({ genres }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[var(--color-cinematic-cyan)]/20 blur-[100px] rounded-full pointer-events-none" />
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-transparent drop-shadow-sm">
                    PromptSymphonyAI
                    <span className="block text-[var(--color-cinematic-gold)] mt-2 text-2xl md:text-3xl">Cinematic Music Theory & Prompt Generation</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">
                    Select a genre below to explore practical composition techniques, orchestration tips, and harmonic structures used in film and game scoring.
                </p>
            </div>

            {/* Genre Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {genres.map((genre, index) => (
                    <motion.div
                        key={genre.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <Link
                            to={`/genre/${genre.id}`}
                            className="group block h-full bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:bg-slate-800 hover:border-[var(--color-cinematic-cyan)]/50 transition-all duration-300 relative overflow-hidden ring-0 hover:ring-2 hover:ring-[var(--color-cinematic-cyan)]/20 shadow-lg hover:shadow-[var(--color-cinematic-cyan)]/10"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                                <genre.icon size={120} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-slate-800 group-hover:bg-[var(--color-cinematic-cyan)]/20 flex items-center justify-center mb-4 transition-colors text-[var(--color-cinematic-cyan)]">
                                    <genre.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-cinematic-cyan)] transition-colors">
                                    {genre.title}
                                </h3>
                                <p className="text-sm text-slate-400 line-clamp-3">
                                    {genre.description}
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Home;
