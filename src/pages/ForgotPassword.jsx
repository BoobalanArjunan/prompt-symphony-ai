import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const { resetPassword } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(email);
            setMessage('Check your inbox for further instructions.');
        } catch (err) {
            setError('Failed to reset password. ' + err.message);
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 z-10 shadow-2xl"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                        Reset Password
                    </h2>
                    <p className="text-slate-400 mt-2">Enter your email to receive reset instructions.</p>
                </div>

                {error && <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-3 rounded-lg mb-4 text-sm">{error}</div>}
                {message && <div className="bg-emerald-500/10 border border-emerald-500/50 text-emerald-200 p-3 rounded-lg mb-4 text-sm flex items-center"><CheckCircle size={16} className="mr-2" />{message}</div>}

                <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-slate-600 h-5 w-5" />
                            <input
                                type="email"
                                required
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <button
                        disabled={loading}
                        className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg shadow-lg shadow-cyan-900/20 hover:shadow-cyan-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Send Reset Link
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <Link to="/login" className="text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2 text-sm">
                        <ArrowLeft size={16} /> Back to Login
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default ForgotPassword;
