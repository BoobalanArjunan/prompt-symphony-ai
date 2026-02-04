import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Chrome } from 'lucide-react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup, loginWithGoogle, sendVerificationEmail, logout } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            // Full name is not being saved to DB as per requirements, but passed to signup if we were updating profile.
            // Since we stripped signup down to just createUserWithEmailAndPassword, we only pass email and password.
            // If we wanted to update profile (displayName), we'd do it here after signup, but user said "For now... Do NOT save user profile data".
            // So we just ignore fullName for now or could updateProfile if strictly auth only.
            // The AuthContext signup no longer accepts 3 args, only 2.
            const cred = await signup(email, password);
            if (cred && cred.user) {
                console.log("Signup successful. UID:", cred.user.uid);
                try {
                    console.log("Attempting to send verification email...");
                    await sendVerificationEmail(cred.user);
                    console.log("Verification email sent.");
                } catch (e) {
                    console.error("Failed to send verification email:", e);
                }

                // Requirement: Do not sign them in automatically.
                // We must log them out immediately because createUser automatically logs them in.
                await logout();
                navigate('/verify-email', { state: { email } });
            }
        } catch (err) {
            // Requirement: If the email already exists, show "User already exists. Please sign in"
            if (err.code === 'auth/email-already-in-use') {
                setError('User already exists. Please sign in');
            } else {
                setError('Failed to create an account. ' + err.message);
            }
        }
        setLoading(false);
    };

    const handleGoogleSignIn = async () => {
        try {
            setError('');
            setLoading(true);
            await loginWithGoogle();
            navigate('/browse');
        } catch (err) {
            setError('Failed to log in with Google. ' + err.message);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 z-10 shadow-2xl"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                        Create Account
                    </h2>
                    <p className="text-slate-400 mt-2">Join PromptSymphonyAI to create without limits.</p>
                </div>

                {error && <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-3 rounded-lg mb-4 text-sm">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-slate-600 h-5 w-5" />
                            <input
                                type="text"
                                required
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
                                placeholder="John Composer"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                autoComplete="off"
                            />
                        </div>
                    </div>

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

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-slate-600 h-5 w-5" />
                            <input
                                type="password"
                                required
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="new-password"
                            />
                        </div>
                    </div>

                    <button
                        disabled={loading}
                        className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg shadow-lg shadow-cyan-900/20 hover:shadow-cyan-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-800"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-slate-900 text-slate-500">Or continue with</span>
                        </div>
                    </div>

                    <button
                        onClick={handleGoogleSignIn}
                        disabled={loading}
                        className="mt-6 w-full flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium py-2.5 rounded-lg transition-all"
                    >
                        <Chrome className="h-5 w-5 text-current" />
                        Google
                    </button>
                </div>

                <div className="text-center mt-6 text-slate-500 text-sm">
                    Already have an account? <Link to="/login" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">Log In</Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;
