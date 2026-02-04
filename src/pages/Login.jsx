import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Chrome } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login, loginWithGoogle, logout } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            const res = await login(email, password);
            if (res.user && !res.user.emailVerified) {
                // Requirement: Block access if email not verified.
                // We do NOT logout here, so that the VerifyEmail page can use the currentUser to resend the email if needed.
                navigate('/verify-email', { state: { email } });
                return;
            }
            navigate('/browse');
        } catch (err) {
            // Requirement: If credentials are incorrect, show "Email or password is incorrect"
            // Firebase usually throws auth/invalid-credential or auth/wrong-password or auth/user-not-found
            if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found' || err.code === 'auth/invalid-email') {
                setError('Email or password is incorrect');
            } else {
                setError('Failed to log in. ' + err.message);
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
                        Welcome Back
                    </h2>
                    <p className="text-slate-400 mt-2">Log in to continue composing.</p>
                </div>

                {error && <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-3 rounded-lg mb-4 text-sm">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
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
                        <div className="flex justify-between items-center">
                            <label className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Password</label>
                            <Link to="/forgot-password" className="text-xs text-cyan-500 hover:text-cyan-400">Forgot Password?</Link>
                        </div>
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
                        Log In
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
                    Don't have an account? <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">Sign Up</Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
