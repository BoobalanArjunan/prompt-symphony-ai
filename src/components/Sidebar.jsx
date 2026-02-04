import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { X, Music, ChevronRight, ChevronDown, Layers, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SidebarGroup = ({ title, icon: Icon, children, defaultOpen = false, level = 0 }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="mb-1">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium transition-colors rounded-lg group ${level === 0 ? 'text-slate-200 hover:bg-slate-900' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                    }`}
                style={{ paddingLeft: `${level * 12 + 12}px` }}
            >
                <div className="flex items-center gap-2">
                    {Icon && <Icon size={18} className={level === 0 ? "text-[var(--color-cinematic-gold)]" : "text-slate-500 group-hover:text-slate-300"} />}
                    <span>{title}</span>
                </div>
                {isOpen ? <ChevronDown size={14} className="text-slate-600" /> : <ChevronRight size={14} className="text-slate-600" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Sidebar = ({ genres, edmGenres = [], isOpen, onClose }) => {
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
                    {/* Root Group: Cinematic Composing */}
                    <SidebarGroup title="Cinematic Composing" icon={Layers} defaultOpen={true} level={0}>

                        {/* Nested Group: Genres */}
                        <SidebarGroup title="Genres" icon={Music} defaultOpen={true} level={1}>
                            {genres.map((genre) => (
                                <NavLink
                                    key={genre.id}
                                    to={`/genre/${genre.id}`}
                                    onClick={() => {
                                        if (window.innerWidth < 1024) onClose();
                                    }}
                                    style={{ paddingLeft: '48px' }} // Indent for level 2 items
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-3 py-2 mb-1 rounded-lg transition-all duration-200 group relative overflow-hidden block w-full ${isActive
                                            ? 'bg-slate-900 text-[var(--color-cinematic-cyan)] border border-[var(--color-cinematic-cyan)]/30 shadow-[0_0_10px_rgba(34,211,238,0.1)]'
                                            : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-cinematic-cyan)] transition-transform duration-300 ${isActive ? 'translate-x-0' : '-translate-x-full'}`} />
                                            <span className="text-sm font-medium truncate">{genre.title}</span>
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </SidebarGroup>

                    </SidebarGroup>

                    {/* Root Group: EDM */}
                    <SidebarGroup title="EDM (Electronic)" icon={Zap} defaultOpen={true} level={0}>

                        {/* Nested Group: Genres */}
                        <SidebarGroup title="Genres" icon={Music} defaultOpen={true} level={1}>
                            {edmGenres.map((genre) => (
                                <NavLink
                                    key={genre.id}
                                    to={`/genre/${genre.id}`}
                                    onClick={() => {
                                        if (window.innerWidth < 1024) onClose();
                                    }}
                                    style={{ paddingLeft: '48px' }} // Indent for level 2 items
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-3 py-2 mb-1 rounded-lg transition-all duration-200 group relative overflow-hidden block w-full ${isActive
                                            ? 'bg-slate-900 text-[var(--color-cinematic-cyan)] border border-[var(--color-cinematic-cyan)]/30 shadow-[0_0_10px_rgba(34,211,238,0.1)]'
                                            : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-cinematic-cyan)] transition-transform duration-300 ${isActive ? 'translate-x-0' : '-translate-x-full'}`} />
                                            <span className="text-sm font-medium truncate">{genre.title}</span>
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </SidebarGroup>

                    </SidebarGroup>
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
