import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Mail, CheckCircle, RefreshCw, Chrome } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const VerifyEmail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { currentUser, sendVerificationEmail, loginWithGoogle } = useAuth();
    const [resending, setResending] = useState(false);
    const [message, setMessage] = useState('');

    // Use email from state if available, otherwise fall back to currentUser's email if logged in
    const email = location.state?.email || currentUser?.email || 'your email';

    const handleResend = async () => {
        if (!currentUser) return;

        setResending(true);
        setMessage('');
        try {
            await sendVerificationEmail(currentUser);
            setMessage('Verification email sent! Check your inbox.');
        } catch (error) {
            console.error("Resend error:", error);
            setMessage('Failed to send. Please try again later.');
        }
        setResending(false);
    };

    const handleGoogleSignIn = async () => {
        try {
            await loginWithGoogle();
            navigate('/dashboard');
        } catch (error) {
            console.error("Google verify error:", error);
            setMessage('Failed to sign in with Google.');
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 z-10 shadow-2xl text-center"
            >
                <div className="mx-auto w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6 text-cyan-400">
                    <Mail size={32} />
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">Verify your email</h2>

                <p className="text-slate-400 mb-6">
                    We have sent you a verification email to <span className="text-slate-200 font-medium">{email}</span>.
                    Please verify it and log in.
                </p>

                {message && (
                    <div className={`mb-4 text-sm p-3 rounded-lg ${message.includes('sent') ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                        {message}
                    </div>
                )}

                <div className="space-y-4">
                    <Link
                        to="/login"
                        className="block w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg shadow-lg shadow-cyan-900/20 hover:shadow-cyan-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        Log In
                    </Link>

                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium py-3 rounded-lg transition-all"
                    >
                        <Chrome className="h-5 w-5 text-current" />
                        Or Continue with Google
                    </button>

                    <div className="pt-2 border-t border-slate-800 mt-4">
                        <p className="text-sm text-slate-500 mb-3">Did not receive the email?</p>

                        {currentUser ? (
                            <button
                                onClick={handleResend}
                                disabled={resending}
                                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center justify-center gap-2 mx-auto disabled:opacity-50"
                            >
                                {resending ? (
                                    <>
                                        <RefreshCw size={14} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    'Resend Verification Email'
                                )}
                            </button>
                        ) : (
                            <p className="text-xs text-slate-500">
                                Check your spam folder or <Link to="/login" className="text-cyan-400 hover:text-cyan-300">log in again</Link> to resend.
                            </p>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default VerifyEmail;
