import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Music, Sliders, Wand2, Copy, Check, RefreshCw,
    ArrowRight, Sparkles, Play, Layers, Settings, X, Zap, ChevronDown
} from 'lucide-react';
import { genres } from '../data/genres';
import { edmGenres } from '../data/edmGenres';

import { indianGenres } from '../data/indianGenres';
import { choirGenres } from '../data/choirGenres';
import { MOODS, SCALES, CHORDS, INSTRUMENTS } from '../data/musicTheory';

// Combine all genres for the builder
const ALL_GENRES = [...genres, ...edmGenres, ...indianGenres, ...choirGenres];

// Custom Searchable Select Component
// Custom Searchable Select Component
const SearchableSelect = ({ label, value, onChange, options, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filter, setFilter] = useState('');
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const containerRef = React.useRef(null);
    const listRef = React.useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredOptions = options.filter(opt =>
        opt.toLowerCase().includes(filter.toLowerCase())
    );

    // Reset highlight when filter changes
    useEffect(() => {
        setHighlightedIndex(0);
    }, [filter]);

    // Keyboard Navigation Logic
    const handleKeyDown = (e) => {
        if (!isOpen) {
            if (e.key === 'ArrowDown' || e.key === 'Enter') {
                setIsOpen(true);
            }
            return;
        }

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setHighlightedIndex(prev =>
                    prev < filteredOptions.length - 1 ? prev + 1 : prev
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setHighlightedIndex(prev => prev > 0 ? prev - 1 : 0);
                break;
            case 'Enter':
                e.preventDefault();
                if (filteredOptions[highlightedIndex]) {
                    onChange(filteredOptions[highlightedIndex]);
                    setIsOpen(false);
                    setFilter('');
                } else if (filter) {
                    // Allow selecting custom text if no option matches
                    onChange(filter);
                    setIsOpen(false);
                }
                break;
            case 'Escape':
                setIsOpen(false);
                break;
            default:
                break;
        }
    };

    // Auto-scroll to highlighted item
    useEffect(() => {
        if (isOpen && listRef.current && listRef.current.children[highlightedIndex]) {
            listRef.current.children[highlightedIndex].scrollIntoView({
                block: 'nearest',
                behavior: 'smooth'
            });
        }
    }, [highlightedIndex, isOpen]);

    return (
        <div className="relative" ref={containerRef}>
            <label className="text-xs text-slate-400 mb-2 block">{label}</label>
            <div className="relative">
                <input
                    type="text"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-sm text-white focus:border-[var(--color-cinematic-cyan)] outline-none pr-8"
                    placeholder={placeholder}
                    value={isOpen ? filter : value} // Show value normally, show filter text when typing
                    onChange={(e) => {
                        setFilter(e.target.value);
                        if (!isOpen) setIsOpen(true);
                        // If user clears input, clear value too
                        if (e.target.value === '') onChange('');
                    }}
                    onFocus={() => {
                        setFilter(''); // Clear filter to show all options initially
                        setIsOpen(true);
                    }}
                    onKeyDown={handleKeyDown}
                />
                <ChevronDown
                    size={14}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition-transform pointer-events-none ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        ref={listRef}
                        className="absolute z-50 w-full left-0 mt-1 max-h-60 overflow-y-auto bg-slate-900 border border-slate-800 rounded-lg shadow-xl custom-scrollbar"
                    >
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((opt, idx) => (
                                <button
                                    key={idx}
                                    className={`w-full text-left px-3 py-2 text-sm transition-colors ${idx === highlightedIndex
                                        ? 'bg-slate-800 text-white'
                                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                        }`}
                                    onClick={() => {
                                        onChange(opt);
                                        setIsOpen(false);
                                        setFilter('');
                                    }}
                                    onMouseMove={() => setHighlightedIndex(idx)}
                                >
                                    {opt}
                                </button>
                            ))
                        ) : (
                            <div className="px-3 py-2 text-sm text-slate-500 italic">
                                No matches found.
                                <button
                                    className="block mt-1 text-[var(--color-cinematic-cyan)] not-italic hover:underline"
                                    onClick={() => {
                                        onChange(filter);
                                        setIsOpen(false);
                                    }}
                                >
                                    Use "{filter}"
                                </button>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const PromptBuilder = () => {
    // Selection State
    const [selectedCategory, setSelectedCategory] = useState('Cinematic');
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [selectedVariation, setSelectedVariation] = useState(null);

    // Customization State
    const [customMood, setCustomMood] = useState('');
    const [customInstrument, setCustomInstrument] = useState('');
    const [customTempo, setCustomTempo] = useState('');
    const [customScale, setCustomScale] = useState('');
    const [customChords, setCustomChords] = useState('');

    // Output State
    const [generatedPrompt, setGeneratedPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [hasGenerated, setHasGenerated] = useState(false);
    const [copySuccess, setCopySuccess] = useState('');
    const [activeTab, setActiveTab] = useState('standard'); // standard, suno, udio

    // Filter Logic based on Category
    // Filter Logic based on Category
    const filteredGenres = ALL_GENRES.filter(g => {
        if (selectedCategory === 'Cinematic') return genres.some(x => x.id === g.id);
        if (selectedCategory === 'Electronic') return edmGenres.some(x => x.id === g.id);
        if (selectedCategory === 'World') return indianGenres.some(x => x.id === g.id);
        if (selectedCategory === 'Choir') return choirGenres.some(x => x.id === g.id);
        return false;
    });

    // Reset downstream selections when upstream changes
    useEffect(() => {
        setSelectedSubcategory(null);
        setSelectedVariation(null);
        setHasGenerated(false);
    }, [selectedGenre]);

    useEffect(() => {
        setSelectedVariation(null);
        setHasGenerated(false);
    }, [selectedSubcategory]);

    // Construct the prompt (Logic only, no state update unless called)
    const buildPromptString = () => {
        if (!selectedVariation) return '';

        let basePrompt = selectedVariation.prompt || '';

        // Helper to check if string contains BPM-like pattern
        const hasBpm = (str) => /\d+\s*bpm/i.test(str);

        // Inject Custom Mood
        if (customMood) {
            const moodRegex = /Mood:\s*.*?[.|\n|$]/i;
            if (moodRegex.test(basePrompt)) {
                basePrompt = basePrompt.replace(moodRegex, `Mood: ${customMood}.`);
            } else {
                // Ensure there's a space before appending if the prompt doesn't end with whitespace
                basePrompt = basePrompt.trim() + ` Mood: ${customMood}.`;
            }
        }

        // Inject Custom Instrument
        if (customInstrument) {
            const instrumentRegex = /Instrumentation:\s*.*?[.|\n|$]/i;
            if (instrumentRegex.test(basePrompt)) {
                basePrompt = basePrompt.replace(instrumentRegex, `Instrumentation: ${customInstrument}.`);
            } else {
                basePrompt = basePrompt.trim() + ` Instrumentation: ${customInstrument}.`;
            }
        }

        // Inject Tempo
        if (customTempo) {
            // Check if user input already has "BPM", if not, append it
            const tempoStr = hasBpm(customTempo) ? customTempo : `${customTempo} BPM`;

            // Regex to find existing tempo (e.g., "120 BPM", "120bpm", "120 bpm")
            const tempoRegex = /(\d+)\s*bpm/i;

            if (tempoRegex.test(basePrompt)) {
                basePrompt = basePrompt.replace(tempoRegex, tempoStr);
            } else {
                basePrompt = basePrompt.trim() + ` Tempo: ${tempoStr}.`;
            }
        }

        // Inject Scale
        if (customScale) {
            basePrompt = basePrompt.trim() + ` Scale: ${customScale}.`;
        }

        // Inject Chords
        if (customChords) {
            basePrompt = basePrompt.trim() + ` Chords: ${customChords}.`;
        }

        // Format based on active Tab
        if (activeTab === 'suno') {
            return `[Style: ${selectedGenre?.title || 'Cinematic'}, ${selectedSubcategory?.title || 'Unknown'}]\n[Mood: ${customMood || 'Cinematic'}]\n\n${basePrompt}`;
        } else if (activeTab === 'udio') {
            return `${selectedGenre?.title || 'Cinematic'}, ${selectedSubcategory?.title || 'Unknown'}, ${customMood || 'Cinematic'}, ${basePrompt}`;
        } else {
            return basePrompt;
        }
    };

    const handleGenerate = () => {
        if (!selectedVariation) return;
        setIsGenerating(true);
        setHasGenerated(false); // Hide previous

        setTimeout(() => {
            const prompt = buildPromptString();
            setGeneratedPrompt(prompt);
            setHasGenerated(true);
            setIsGenerating(false);
        }, 800);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedPrompt);
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000);
    };

    return (
        <div className="min-h-screen bg-[var(--color-cinematic-bg)] p-4 md:p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Header Section */}
                <div className="lg:col-span-12 mb-4">
                    <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                        <Sparkles className="text-[var(--color-cinematic-gold)]" />
                        Prompt Studio
                    </h1>
                    <p className="text-slate-400">Design professional music prompts step-by-step.</p>
                </div>

                {/* LEFT PANEL: Builder Controls */}
                <div className="lg:col-span-5 space-y-6">

                    {/* 1. KEY SELECTION (Foundation) */}
                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-sm">
                        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Layers size={16} /> 1. Select Foundation
                        </h2>

                        {/* Category Tabs */}
                        <div className="flex gap-2 mb-4 p-1 bg-slate-950 rounded-lg">
                            {['Cinematic', 'Electronic', 'World', 'Choir'].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${selectedCategory === cat
                                        ? 'bg-slate-800 text-white shadow-sm'
                                        : 'text-slate-500 hover:text-slate-300'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-2 max-h-[200px] overflow-y-auto custom-scrollbar pr-1">
                            {filteredGenres.map(genre => (
                                <button
                                    key={genre.id}
                                    onClick={() => setSelectedGenre(genre)}
                                    className={`p-2.5 rounded-lg border text-left transition-all relative overflow-hidden group ${selectedGenre?.id === genre.id
                                        ? 'bg-slate-800 border-[var(--color-cinematic-cyan)]/50 text-white shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                                        }`}
                                >
                                    <div className="flex items-center gap-2 relative z-10">
                                        <genre.icon size={16} className={selectedGenre?.id === genre.id ? 'text-[var(--color-cinematic-cyan)]' : 'text-slate-500'} />
                                        <span className="font-medium text-xs truncate">{genre.title}</span>
                                    </div>
                                    {selectedGenre?.id === genre.id && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-cinematic-cyan)]/10 to-transparent" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 2. STYLE & VARIATION */}
                    <div className={`bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 ${!selectedGenre ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
                        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Settings size={16} /> 2. Refine Style
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="text-xs text-slate-400 mb-2 block">Sub-Genre</label>
                                <select
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-[var(--color-cinematic-cyan)] outline-none transition-colors"
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        if (!selectedGenre) return;
                                        const sub = selectedGenre.subcategories.find(s => s.id === val);
                                        setSelectedSubcategory(sub || null);
                                    }}
                                    value={selectedSubcategory?.id || ''}
                                    disabled={!selectedGenre}
                                >
                                    <option value="">Select a style...</option>
                                    {selectedGenre?.subcategories?.map((sub, idx) => (
                                        <option key={`${sub.id}-${idx}`} value={sub.id}>{sub.title}</option>
                                    ))}
                                </select>
                            </div>

                            {selectedSubcategory && (
                                <div className="space-y-2">
                                    <label className="text-xs text-slate-400 block">Variation Template</label>
                                    <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto custom-scrollbar">
                                        {(selectedSubcategory.variations || []).map((v, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setSelectedVariation(v)}
                                                className={`text-left text-sm p-3 rounded-lg transition-colors border ${selectedVariation === v
                                                    ? 'bg-slate-800 border-[var(--color-cinematic-gold)]/50 text-white'
                                                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                                                    }`}
                                            >
                                                {v.name || `Variation ${idx + 1}`}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 3. CUSTOMIZE DATA */}
                    <div className={`bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 ${!selectedVariation ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
                        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Sliders size={16} /> 3. Customize
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <SearchableSelect
                                    label="Custom Mood"
                                    value={customMood}
                                    onChange={setCustomMood}
                                    options={MOODS}
                                    placeholder="e.g. Dark, Euphoric..."
                                />
                            </div>
                            <div>
                                <SearchableSelect
                                    label="Key Instrument"
                                    value={customInstrument}
                                    onChange={setCustomInstrument}
                                    options={[...INSTRUMENTS, 'Orchestra', 'Synth', 'Choir', 'Drums']}
                                    placeholder="e.g. Cello..."
                                />
                            </div>
                            <div>
                                <label className="text-xs text-slate-400 mb-2 block">Tempo</label>
                                <input
                                    type="text"
                                    placeholder="e.g. 120 BPM"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-sm text-white focus:border-[var(--color-cinematic-cyan)] outline-none"
                                    value={customTempo}
                                    onChange={(e) => setCustomTempo(e.target.value)}
                                />
                            </div>
                            <div>
                                <SearchableSelect
                                    label="Scale"
                                    value={customScale}
                                    onChange={setCustomScale}
                                    options={SCALES}
                                    placeholder="e.g. C Minor..."
                                />
                            </div>
                            <div>
                                <SearchableSelect
                                    label="Chords"
                                    value={customChords}
                                    onChange={setCustomChords}
                                    options={CHORDS}
                                    placeholder="e.g. Jazz chords..."
                                />
                            </div>

                            {/* GENERATE BUTTON */}
                            <div className="col-span-2 mt-4 pt-4 border-t border-slate-800">
                                <button
                                    onClick={handleGenerate}
                                    disabled={!selectedVariation || isGenerating}
                                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${!selectedVariation
                                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                                        : 'bg-[var(--color-cinematic-gold)] text-slate-900 hover:bg-yellow-400 hover:scale-[1.02] shadow-yellow-900/20'
                                        }`}
                                >
                                    {isGenerating ? (
                                        <>
                                            <RefreshCw className="animate-spin" />
                                            Generating...
                                        </>
                                    ) : (
                                        <>
                                            <Zap size={20} fill="currentColor" />
                                            GENERATE PROMPT
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT PANEL: Live Output */}
                <div className="lg:col-span-7 flex flex-col h-full min-h-[500px]">

                    <div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-1 relative overflow-hidden shadow-2xl flex flex-col">

                        {/* Format Tabs */}
                        <div className="flex border-b border-slate-800 bg-slate-950/50 shrink-0">
                            {[
                                { id: 'standard', label: 'Standard' },
                                { id: 'suno', label: 'Suno AI' },
                                { id: 'udio', label: 'Udio' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-4 text-sm font-medium transition-colors relative ${activeTab === tab.id ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                                        }`}
                                >
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-cinematic-cyan)]" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Prompt Display Area */}
                        <div className="p-8 flex-1 flex flex-col relative">
                            {/* Background Glow */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-cinematic-cyan)]/5 rounded-full blur-[100px] pointer-events-none transition-opacity duration-1000 ${hasGenerated ? 'opacity-100' : 'opacity-0'}`} />

                            {!hasGenerated ? (
                                <div className="flex-1 flex flex-col items-center justify-center text-slate-600 text-center space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mb-2">
                                        <Wand2 size={24} className="opacity-50" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-500">Prompt Builder</h3>
                                    <p className="max-w-md">
                                        Select a style, customize your theory, and click <strong>Generate</strong> to build your prompt.
                                    </p>
                                </div>
                            ) : (
                                <div className="relative z-10 flex-1">
                                    <textarea
                                        className="w-full h-full bg-transparent border-none text-lg md:text-xl text-slate-200 font-light leading-relaxed resize-none focus:outline-none custom-scrollbar"
                                        value={generatedPrompt}
                                        onChange={(e) => setGeneratedPrompt(e.target.value)}
                                        spellCheck="false"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Action Bar */}
                        {hasGenerated && (
                            <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex justify-between items-center shrink-0">
                                <div className="text-xs text-slate-500 font-mono">
                                    {generatedPrompt ? `${generatedPrompt.length} chars` : '0 chars'}
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        onClick={handleGenerate}
                                        className="p-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                                        title="Regenerate"
                                    >
                                        <RefreshCw size={20} className={isGenerating ? 'animate-spin' : ''} />
                                    </button>

                                    <button
                                        onClick={copyToClipboard}
                                        className="flex items-center gap-2 px-6 py-3 bg-[var(--color-cinematic-gold)] hover:bg-yellow-500 text-slate-900 font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]"
                                    >
                                        {copySuccess ? <Check size={20} /> : <Copy size={20} />}
                                        {copySuccess || 'Copy Prompt'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Theory Helper (Context) - Only show if generated or selected */}
                    {selectedSubcategory && (
                        <div className="mt-4 p-4 rounded-xl border border-slate-800/50 bg-slate-900/30 text-xs text-slate-500 flex gap-4">
                            <div className="flex-1">
                                <span className="block font-bold text-slate-400 mb-1">Core Theory</span>
                                {selectedSubcategory.coreTheory?.harmony || 'Standard harmonic progression'}
                            </div>
                            <div className="flex-1">
                                <span className="block font-bold text-slate-400 mb-1">Orchestration</span>
                                {selectedSubcategory.coreTheory?.orchestration || 'Standard instrumentation'}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PromptBuilder;
