import React, { useState } from 'react';
import { Mail, MessageSquare, Bug, Lightbulb, Youtube, Github, Twitter, HelpCircle, Send, CheckCircle, Smartphone, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const InputField = ({ label, type = "text", placeholder, options }) => (
    <div className="mb-4">
        <label className="block text-slate-400 text-sm font-medium mb-2">{label}</label>
        {type === "textarea" ? (
            <textarea
                rows="5"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-[var(--color-cinematic-gold)] focus:ring-1 focus:ring-[var(--color-cinematic-gold)] transition-colors resize-none placeholder-slate-600"
                placeholder={placeholder}
            ></textarea>
        ) : type === "select" ? (
            <div className="relative">
                <select className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-[var(--color-cinematic-gold)] focus:ring-1 focus:ring-[var(--color-cinematic-gold)] transition-colors appearance-none cursor-pointer">
                    {options.map((opt, i) => <option key={i}>{opt}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </div>
        ) : (
            <input
                type={type}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-[var(--color-cinematic-gold)] focus:ring-1 focus:ring-[var(--color-cinematic-gold)] transition-colors placeholder-slate-600"
                placeholder={placeholder}
            />
        )}
    </div>
);

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate API call
        setTimeout(() => {
            // Reset or something if needed
        }, 3000);
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                    Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cinematic-gold)] to-[var(--color-cinematic-cyan)]">PromptSymphonyAI</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Have questions, feedback, or feature ideas? We’d love to hear from you.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-2xl backdrop-blur-sm shadow-xl"
                >
                    {!submitted ? (
                        <form onSubmit={handleSubmit}>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <Mail className="text-[var(--color-cinematic-gold)]" /> Send a Message
                            </h2>

                            <InputField label="Name" placeholder="Your name" />
                            <InputField label="Email" type="email" placeholder="your@email.com" />
                            <InputField
                                label="Subject"
                                type="select"
                                options={['Support', 'Feedback', 'Feature Request', 'Bug Report', 'Business Inquiry', 'Other']}
                            />
                            <InputField label="Message" type="textarea" placeholder="How can we help you today?" />

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[var(--color-cinematic-gold)] to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-[var(--color-cinematic-gold)]/20 flex items-center justify-center gap-2"
                            >
                                <Send size={20} /> Send Message
                            </button>

                            <p className="text-center text-slate-500 text-sm mt-4">
                                We typically respond within 24–48 hours.
                            </p>
                        </form>
                    ) : (
                        <div className="text-center py-20 px-6">
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400"
                            >
                                <CheckCircle size={40} />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-slate-400 mb-8">
                                Thanks for reaching out. We've received your message and will get back to you shortly.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="text-[var(--color-cinematic-gold)] hover:underline font-medium"
                            >
                                Send another message
                            </button>
                        </div>
                    )}
                </motion.div>

                {/* Right Column: Contact Info & Helpers */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8"
                >
                    {/* Direct Email */}
                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Globe className="text-[var(--color-cinematic-cyan)]" size={20} /> Direct Contact
                        </h3>
                        <div className="space-y-3">
                            <div>
                                <div className="text-sm text-slate-500 mb-1">General Support</div>
                                <a href="mailto:support@promptsymphonyai.com" className="text-[var(--color-cinematic-gold)] hover:underline block text-lg font-mono">
                                    support@promptsymphonyai.com
                                </a>
                            </div>
                            <div>
                                <div className="text-sm text-slate-500 mb-1">Business & Partnerships</div>
                                <a href="mailto:business@promptsymphonyai.com" className="text-slate-300 hover:text-white hover:underline block font-mono">
                                    business@promptsymphonyai.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Feedback & Bugs Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl">
                            <Lightbulb className="text-yellow-400 mb-3" size={24} />
                            <h4 className="font-bold text-white mb-2">Feature Ideas?</h4>
                            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                                Want a new genre or mood? Help shape the future of PromptSymphonyAI.
                            </p>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl">
                            <Bug className="text-red-400 mb-3" size={24} />
                            <h4 className="font-bold text-white mb-2">Report Bugs</h4>
                            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                                Please include the genre, what happened, and a screenshot if possible.
                            </p>
                        </div>
                    </div>

                    {/* FAQ & Socials */}
                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <HelpCircle className="text-slate-400" />
                            <div>
                                <h3 className="text-white font-bold">Looking for answers?</h3>
                                <p className="text-xs text-slate-500">Check our FAQ before contacting support.</p>
                            </div>
                            <Link to="/faq" className="ml-auto px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold text-white transition-colors">
                                Visit FAQ
                            </Link>
                        </div>

                        <div className="border-t border-slate-800 pt-6">
                            <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">Follow our updates</h4>
                            <div className="flex gap-4">
                                {[Youtube, Github, Twitter, Globe].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[var(--color-cinematic-gold)] hover:text-slate-900 transition-colors">
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Privacy Note */}
                    <div className="text-center md:text-left">
                        <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                            <span className="text-slate-500 font-bold block mb-1">Privacy Guarantee</span>
                            Your message will be used only to respond to your request. We respect your privacy and never share your contact details.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Call to Action Footer */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 text-center border-t border-slate-800 pt-10"
            >
                <h2 className="text-2xl font-bold text-white mb-2">
                    Let’s build better music tools together.
                </h2>
                <p className="text-slate-400 mb-6">
                    Reach out and be part of the PromptSymphonyAI journey.
                </p>
            </motion.div>
        </div>
    );
};

export default Contact;
