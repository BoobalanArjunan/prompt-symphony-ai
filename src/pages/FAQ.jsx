import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqData = [
    {
        category: "General",
        items: [
            {
                question: "What is PromptSymphonyAI?",
                answer: "PromptSymphonyAI is a web app that generates ready-to-use text prompts for creating cinematic music with AI. You select a genre, sub-genre, and mood, and get music theory guidance plus a detailed prompt you can paste into an AI music generator."
            },
            {
                question: "Does this app create music directly?",
                answer: "No. PromptSymphonyAI creates high-quality text-to-music prompts. You use these prompts in your preferred AI music generation tool."
            },
            {
                question: "Who is this for?",
                answer: "Composers, filmmakers, game developers, content creators, students, and anyone who wants fast, cinematic music ideas."
            }
        ]
    },
    {
        category: "How to Use",
        items: [
            {
                question: "How do I create music using this site?",
                answer: "Choose a genre → pick a sub-category → copy the generated prompt → paste it into an AI music generator to produce the music."
            },
            {
                question: "Can I edit the generated prompt?",
                answer: "Yes. You can modify the prompt text to better match your specific scene or preference before using it."
            },
            {
                question: "What do chords and scales sections mean?",
                answer: "They show the recommended musical scales and chord styles that fit the mood, helping musicians understand or manually compose in the same style."
            }
        ]
    },
    {
        category: "Genres and Categories",
        items: [
            {
                question: "Why are there so many sub-categories?",
                answer: "Each sub-category represents a specific scene or emotion (like “burning building escape” or “magical portal discovery”) so you can get very precise musical direction."
            },
            {
                question: "Are the sub-categories randomly generated?",
                answer: "They are procedurally generated but follow strict music theory rules for mood, tempo, scales, and harmony."
            },
            {
                question: "Will more genres be added?",
                answer: "Yes. New genres, moods, and variations will be added over time."
            }
        ]
    },
    {
        category: "Music Theory",
        items: [
            {
                question: "Do I need music theory knowledge to use this?",
                answer: "No. You can just copy the prompt. The theory sections are there for users who want deeper understanding."
            },
            {
                question: "Are these prompts based on real music theory?",
                answer: "Yes. Each prompt is guided by scales, chord progressions, tempo ranges, and orchestration styles used in real cinematic music."
            }
        ]
    },
    {
        category: "Technical",
        items: [
            {
                question: "Is PromptSymphonyAI free to use?",
                answer: "Currently yes, basic access is free."
            },
            {
                question: "Do I need to create an account?",
                answer: "No account is required to browse and copy prompts."
            },
            {
                question: "Does it work on mobile?",
                answer: "Yes. The site is fully responsive and works on phones, tablets, and desktops."
            }
        ]
    },
    {
        category: "Using with AI Music Tools",
        items: [
            {
                question: "Which AI music generators can I use?",
                answer: "You can use any text-to-music AI tool that accepts descriptive prompts."
            },
            {
                question: "Why does the result sound different each time?",
                answer: "AI music tools generate variations, so the same prompt can produce slightly different music on each run."
            }
        ]
    },
    {
        category: "Customization & Saving",
        items: [
            {
                question: "Can I save my favorite prompts?",
                answer: "This feature will be added in future updates."
            },
            {
                question: "Can I create my own custom sub-category?",
                answer: "Not yet, but custom prompt creation is planned for future versions."
            }
        ]
    },
    {
        category: "Support",
        items: [
            {
                question: "How do I report a bug or suggest a feature?",
                answer: "Use the Contact page and select “Bug Report” or “Feature Request”."
            },
            {
                question: "How often is the content updated?",
                answer: "The library is continuously expanded with new genres, scenarios, and improvements."
            }
        ]
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-800 rounded-lg bg-slate-900/40 overflow-hidden mb-3">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800/50 transition-colors"
            >
                <span className={`font-medium ${isOpen ? 'text-[var(--color-cinematic-gold)]' : 'text-slate-200'}`}>
                    {question}
                </span>
                {isOpen ? (
                    <Minus className="text-[var(--color-cinematic-gold)] flex-shrink-0" size={18} />
                ) : (
                    <Plus className="text-slate-500 flex-shrink-0" size={18} />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-4 pt-0 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = faqData.map(category => ({
        ...category,
        items: category.items.filter(item =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category => category.items.length > 0);

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                    Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cinematic-gold)] to-[var(--color-cinematic-cyan)]">Questions</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Everything you need to know about PromptSymphonyAI.
                </p>

                {/* Search Box */}
                <div className="max-w-md mx-auto mt-8 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <Search size={18} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for answers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full pl-10 pr-3 py-3 border border-slate-700 rounded-full bg-slate-900/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[var(--color-cinematic-gold)] focus:ring-1 focus:ring-[var(--color-cinematic-gold)] transition-all shadow-lg"
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-10"
            >
                {filteredData.length > 0 ? (
                    filteredData.map((category, index) => (
                        <div key={index}>
                            <h2 className="text-xl font-bold text-[var(--color-cinematic-cyan)] mb-4 flex items-center gap-2">
                                {category.category}
                            </h2>
                            <div className="space-y-1">
                                {category.items.map((item, i) => (
                                    <FAQItem key={i} question={item.question} answer={item.answer} />
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12 text-slate-500">
                        No answers found for "{searchTerm}".
                    </div>
                )}
            </motion.div>

            <div className="mt-20 text-center border-t border-slate-800 pt-10">
                <p className="text-slate-400 mb-4">
                    Still have questions?
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium">
                    <HelpCircle size={18} /> Contact Support
                </Link>
            </div>
        </div>
    );
};

export default FAQ;
