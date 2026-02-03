import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ genres, isOpen, onClose }) => {
    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Content */}
            <aside
                className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-slate-950 border-r border-slate-800 z-50 transition-transform duration-300 transform lg:translate-x-0 overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-6 flex items-center justify-between border-b border-slate-800 h-16">
                    <NavLink to="/browse" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded bg-gradient-to-tr from-[var(--color-cinematic-gold)] to-[var(--color-cinematic-cyan)] flex items-center justify-center text-slate-900 shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                            <Music size={18} fill="currentColor" />
                        </div>
                        <span className="font-bold text-lg tracking-tight text-slate-200 group-hover:text-[var(--color-cinematic-cyan)] transition-colors">
                            PromptSymphonyAI
                        </span>
                    </NavLink>
                    <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                <nav className="p-4 space-y-1">
                    <div className="px-3 py-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        Genres
                    </div>
                    {genres.map((genre) => (
                        <NavLink
                            key={genre.id}
                            to={`/genre/${genre.id}`}
                            onClick={() => {
                                if (window.innerWidth < 1024) onClose();
                            }}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group relative overflow-hidden ${isActive
                                    ? 'bg-slate-900 text-[var(--color-cinematic-cyan)] border border-[var(--color-cinematic-cyan)]/30 shadow-[0_0_10px_rgba(34,211,238,0.1)]'
                                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-cinematic-cyan)] transition-transform duration-300 ${isActive ? 'translate-x-0' : '-translate-x-full'}`} />
                                    <genre.icon size={18} className={`transition-colors ${isActive ? 'text-[var(--color-cinematic-cyan)]' : 'group-hover:text-white'}`} />
                                    <span className="text-sm font-medium">{genre.title}</span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 mt-auto">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-center">
                        <p className="text-xs text-slate-400 mb-2">Need a custom prompt?</p>
                        <div className="inline-block px-3 py-1 rounded bg-[var(--color-cinematic-gold)]/10 text-[var(--color-cinematic-gold)] text-xs font-bold">
                            Coming Soon
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
