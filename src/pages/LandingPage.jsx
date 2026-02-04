import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Music, Play, Zap, Globe, Shield, Radio, ArrowRight, UserPlus, LogIn } from 'lucide-react';

const LandingPage = () => {
    const navigate = useNavigate();
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-slate-900 overflow-x-hidden">
            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-slate-800/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Navigation */}
            <nav className="relative z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-white">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-cyan-400 flex items-center justify-center text-slate-900 shadow-lg shadow-cyan-500/20">
                        <Music size={24} fill="currentColor" />
                    </div>
                    <span>PromptSymphonyAI</span>
                </div>
                <div className="flex items-center gap-4">
                    {/* Log In removed as requested */}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 pt-20 pb-32 lg:pt-32 lg:pb-48 px-4 text-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        AI Music Generation Pioneer
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 mb-6 tracking-tight leading-[1.1]">
                        The Ultimate <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">200K Music Prompt</span> Explorer
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Unleash your musical creativity with the world's most extensive database of AI-generated music prompts.
                        Curated styles, dynamic contexts, and infinite inspiration.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/browse"
                            className="group relative px-16 py-6 bg-white text-slate-900 font-black rounded-full text-4xl shadow-[0_0_50px_-10px_rgba(34,211,238,0.6)] hover:shadow-[0_0_80px_-10px_rgba(34,211,238,0.9)] hover:scale-105 transition-all duration-300"
                        >
                            <span className="flex items-center gap-4">
                                Get Started
                                <ArrowRight size={40} className="animate-pulse ml-2" />
                            </span>
                        </Link>
                    </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div style={{ y: y1 }} className="absolute top-1/4 -left-12 lg:left-0 text-slate-800 opacity-50 pointer-events-none">
                    <Music size={120} />
                </motion.div>
                <motion.div style={{ y: y2 }} className="absolute bottom-0 -right-12 lg:right-10 text-slate-800 opacity-50 pointer-events-none">
                    <Radio size={140} />
                </motion.div>
            </section>

            {/* Features Stats */}
            <section id="features" className="relative z-10 py-24 bg-slate-900/50 backdrop-blur-sm border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="text-center group p-6 rounded-2xl hover:bg-slate-800/50 transition-colors cursor-default">
                        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Zap className="text-white" size={32} />
                        </div>
                        <h3 className="text-4xl font-black text-white mb-2">200K+</h3>
                        <p className="text-slate-400 font-medium">Distinct Prompts Generated</p>
                    </div>
                    <div className="text-center group p-6 rounded-2xl hover:bg-slate-800/50 transition-colors cursor-default">
                        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Globe className="text-white" size={32} />
                        </div>
                        <h3 className="text-4xl font-black text-white mb-2">20+</h3>
                        <p className="text-slate-400 font-medium">Unique Genres Covered</p>
                    </div>
                    <div className="text-center group p-6 rounded-2xl hover:bg-slate-800/50 transition-colors cursor-default">
                        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Shield className="text-white" size={32} />
                        </div>
                        <h3 className="text-4xl font-black text-white mb-2">100%</h3>
                        <p className="text-slate-400 font-medium">Royalty Free Inspiration</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative z-10 py-32 px-6 text-center">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 border border-slate-700 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none" />

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Composing?</h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto text-lg">
                        Join thousands of composers using PromptSymphonyAI to break through writer's block.
                    </p>
                    <Link
                        to="/login"
                        className="inline-block px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
                    >
                        Get Started For Free
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 text-center text-slate-600 text-sm border-t border-slate-800/50">
                <p>&copy; {new Date().getFullYear()} PromptSymphonyAI. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
