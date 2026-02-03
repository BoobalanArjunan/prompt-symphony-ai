import React from 'react';
import { Music, Zap, BookOpen, Users, Layers, TrendingUp, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Section = ({ title, children, icon: Icon, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="mb-12"
    >
        <div className="flex items-center gap-3 mb-4">
            {Icon && <Icon className="text-[var(--color-cinematic-cyan)]" size={24} />}
            <h2 className="text-2xl font-bold text-white tracking-wide">{title}</h2>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl backdrop-blur-sm shadow-lg">
            {children}
        </div>
    </motion.div>
);

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cinematic-gold)] to-[var(--color-cinematic-cyan)] mb-4">
                    About PromptSymphonyAI
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Where music theory meets artificial intelligence to inspire your next masterpiece.
                </p>
            </motion.div>

            <Section title="Our Mission" icon={Heart} delay={0.1}>
                <p className="text-lg text-slate-300 leading-relaxed">
                    PromptSymphonyAI is an AI-powered cinematic music companion that helps creators turn words into music ideas.
                    By combining music theory, genre knowledge, moods, chords, and scales, it generates ready-to-use text-to-music
                    prompts for composers, filmmakers, game developers, and content creators.
                </p>
            </Section>

            <Section title="What Makes It Unique" icon={Zap} delay={0.2}>
                <ul className="space-y-3">
                    {[
                        "Thousands of genre and sub-genre scenarios",
                        "Each with mood-based chords and scales",
                        "Structured music theory guidance",
                        "Ready-to-copy AI music generation prompts (max 200 words)",
                        "Designed for cinematic, game, and story-driven music"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                            <span className="text-[var(--color-cinematic-gold)] mt-1">•</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </Section>

            <Section title="How It Works" icon={Layers} delay={0.3}>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {[
                        { title: "1. Choose", desc: "Select a genre like Action or Horror" },
                        { title: "2. Pick", desc: "Find a sub-category context" },
                        { title: "3. View", desc: "See theory & orchestration rules" },
                        { title: "4. Copy", desc: "Get the generated prompt" },
                        { title: "5. Create", desc: "Paste into your music AI" }
                    ].map((step, i) => (
                        <div key={i} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 text-center">
                            <div className="text-[var(--color-cinematic-cyan)] font-bold mb-1">{step.title}</div>
                            <div className="text-xs text-slate-400">{step.desc}</div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="Who It’s For" icon={Users} delay={0.4}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {[
                        "Music composers",
                        "Film and video editors",
                        "Game developers",
                        "YouTubers and content creators",
                        "Students learning music theory",
                        "Anyone needing cinematic music ideas"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-cinematic-gold)]"></div>
                            {item}
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="Built on Music Theory" icon={Music} delay={0.5}>
                <p className="text-slate-300 leading-relaxed">
                    This isn't just random text generation. Every prompt is guided by real music theory principles, including:
                    <span className="text-[var(--color-cinematic-cyan)]"> modal scales</span>,
                    <span className="text-[var(--color-cinematic-cyan)]"> chord progressions</span>,
                    <span className="text-[var(--color-cinematic-cyan)]"> tempo rules</span>, and
                    <span className="text-[var(--color-cinematic-cyan)]"> mood-based harmony</span>.
                    We ensure the results are musically meaningful and theoretically sound.
                </p>
            </Section>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="text-[var(--color-cinematic-gold)]" size={24} />
                        <h3 className="text-xl font-bold text-white">Endless Possibilities</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Explore an ever-expanding library with thousands of unique scenarios and procedurally generated categories.
                        From the deepest horror to the most inspiring fantasy, the variety is infinite.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="text-[var(--color-cinematic-gold)]" size={24} />
                        <h3 className="text-xl font-bold text-white">Vision for the Future</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        We're just getting started. Look forward to more genres, direct AI music generation integration,
                        custom prompt editing, and user-curated collections.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-b from-slate-900 to-black border border-[var(--color-cinematic-gold)]/30 p-10 rounded-2xl shadow-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-cinematic-gold)] to-transparent opacity-50"></div>
                <h2 className="text-3xl font-bold text-white mb-4">Start Creating Today</h2>
                <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                    Start exploring a genre and turn your imagination into music with PromptSymphonyAI.
                </p>
                <a
                    href="/"
                    className="inline-block px-8 py-3 bg-[var(--color-cinematic-gold)] hover:bg-yellow-500 text-slate-900 font-bold rounded-full transition-transform hover:scale-105 shadow-lg shadow-[var(--color-cinematic-gold)]/20"
                >
                    Explore Genres
                </a>
            </motion.div>

            <div className="mt-16 text-center border-t border-slate-800 pt-8">
                <p className="text-slate-500 text-sm italic">
                    "PromptSymphonyAI was created to make cinematic music creation accessible to everyone, blending AI and traditional music theory into one creative tool."
                </p>
            </div>
        </div>
    );
};

export default About;
