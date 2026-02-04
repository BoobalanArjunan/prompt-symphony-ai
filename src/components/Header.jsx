import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Search, Menu, BookOpen, User, Mail, Home, Zap, LayoutDashboard, LogIn, Bookmark } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = ({ onMenuClick, genres }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();
    const { user } = useAuth();

    const filteredGenres = searchQuery
        ? genres.filter(g => g.title.toLowerCase().includes(searchQuery.toLowerCase()))
        : [];

    const handleSearchSelect = (id) => {
        navigate(`/genre/${id}`);
        setSearchQuery('');
        setShowResults(false);
    };

    return (
        <header className="sticky top-0 z-30 bg-[var(--color-cinematic-bg)]/80 backdrop-blur-md border-b border-slate-800 h-16 flex items-center px-4 lg:px-8 justify-between">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                    <Menu size={24} />
                </button>

                {/* Search Bar */}
                <div className="relative group w-full max-w-md hidden sm:block">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-[var(--color-cinematic-gold)] transition-colors">
                        <Search size={18} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search genres..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setShowResults(true);
                        }}
                        onFocus={() => setShowResults(true)}
                        onBlur={() => setTimeout(() => setShowResults(false), 200)}
                        className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-full leading-5 bg-slate-900/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-slate-900 focus:border-[var(--color-cinematic-gold)] focus:ring-1 focus:ring-[var(--color-cinematic-gold)] sm:text-sm transition-all shadow-sm"
                    />

                    {/* Search Results Dropdown */}
                    {showResults && searchQuery && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-lg shadow-xl overflow-hidden z-50">
                            {filteredGenres.length > 0 ? (
                                <ul>
                                    {filteredGenres.map(genre => (
                                        <li key={genre.id}>
                                            <button
                                                onClick={() => handleSearchSelect(genre.id)}
                                                className="w-full text-left px-4 py-3 hover:bg-slate-800 transition-colors flex items-center gap-3 text-sm text-slate-300 hover:text-[var(--color-cinematic-cyan)]"
                                            >
                                                <genre.icon size={16} />
                                                {genre.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="px-4 py-3 text-sm text-slate-500">No genres found</div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <nav className="flex items-center gap-1 sm:gap-6">
                <NavLink
                    to="/browse"
                    className={({ isActive }) => `hidden sm:flex items-center gap-2 text-sm font-medium transition-colors ${isActive ? 'text-[var(--color-cinematic-gold)]' : 'text-slate-400 hover:text-white'}`}
                >
                    <Home size={18} />
                    <span className="hidden md:inline">Home</span>
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => `flex items-center gap-2 text-sm font-medium transition-colors ${isActive ? 'text-[var(--color-cinematic-gold)]' : 'text-slate-400 hover:text-white'}`}
                >
                    <BookOpen size={18} />
                    <span className="hidden md:inline">About</span>
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => `flex items-center gap-2 text-sm font-medium transition-colors ${isActive ? 'text-[var(--color-cinematic-gold)]' : 'text-slate-400 hover:text-white'}`}
                >
                    <Mail size={18} />
                    <span className="hidden md:inline">Contact</span>
                </NavLink>
                <NavLink
                    to="/library"
                    className={({ isActive }) => `flex items-center gap-2 text-sm font-medium transition-colors ${isActive ? 'text-[var(--color-cinematic-gold)]' : 'text-slate-400 hover:text-white'}`}
                >
                    <Bookmark size={18} />
                    <span className="hidden md:inline">My Library</span>
                </NavLink>

                {user ? (
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => `flex items-center gap-2 text-sm font-bold transition-all px-3 py-1.5 rounded-full ${isActive ? 'bg-cyan-500/10 text-[var(--color-cinematic-cyan)] border border-cyan-500/50' : 'text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800'}`}
                    >
                        <LayoutDashboard size={16} />
                        <span className="hidden md:inline">{user.displayName || user.email?.split('@')[0] || 'Studio'}</span>
                    </NavLink>
                ) : (
                    <div className="flex items-center gap-3">
                        <NavLink
                            to="/login"
                            className="hidden sm:flex text-sm font-medium text-slate-400 hover:text-white transition-colors"
                        >
                            Log In
                        </NavLink>
                        <NavLink
                            to="/signup"
                            className="bg-[var(--color-cinematic-gold)] text-slate-900 hover:bg-amber-400 text-sm font-bold px-4 py-2 rounded-lg transition-colors shadow-lg shadow-amber-900/20"
                        >
                            Sign Up
                        </NavLink>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
