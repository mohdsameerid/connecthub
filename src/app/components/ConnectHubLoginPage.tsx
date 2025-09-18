'use client';

import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    // Users,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Chrome,
    Facebook,
} from 'lucide-react';
import Link from 'next/link';

const ConnectHubLoginPage: React.FC = () => {
    // const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors: { email?: string; password?: string } = {};

        if (!email) validationErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) validationErrors.email = 'Invalid email address';

        if (!password) validationErrors.password = 'Password is required';
        else if (password.length < 6) validationErrors.password = 'Minimum 6 characters required';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsLoading(false);
        alert('Logged in successfully!');
        // navigate('/dashboard'); // or onNavigate callback
    };

    const handleSocialLogin = (provider: string) => {
        console.log(`Login with ${provider}`);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
    };

    const buttonVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
        hover: { scale: 1.05, transition: { duration: 0.2, ease: 'easeOut' as const } },
    };

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden flex items-center justify-center p-6">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-md space-y-8"
            >
                {/* Header */}
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl font-bold text-white text-center"
                >
                    Welcome to{' '}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        ConnectHub
                    </span>
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    className="text-white/80 text-center"
                >
                    The ultimate platform connecting brands with authentic influencers.
                </motion.p>

                {/* Login Form */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-8"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-white font-medium">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`w-full pl-10 h-12 rounded-md bg-white/10 text-white placeholder-white/60 border ${errors.email
                                        ? 'border-red-500'
                                        : 'border-white/30 focus:border-cyan-400'
                                        } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                                    required
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-400 text-sm">{errors.email}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-white font-medium">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`w-full pl-10 pr-10 h-12 rounded-md bg-white/10 text-white placeholder-white/60 border ${errors.password
                                        ? 'border-red-500'
                                        : 'border-white/30 focus:border-cyan-400'
                                        } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-400 text-sm">{errors.password}</p>
                            )}
                        </div>

                        {/* Remember me */}
                        <div className="flex items-center justify-between text-white/80">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 rounded bg-white/20 text-cyan-400 focus:ring-cyan-400 border-white/30"
                                />
                                <span>Remember me</span>
                            </label>

                            <button type="button" className="hover:underline">
                                Forgot password?
                            </button>
                        </div>

                        {/* Submit */}
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg flex items-center justify-center"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    Sign In <ArrowRight className="w-5 h-5 ml-2" />
                                </>
                            )}
                        </motion.button>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="border-t border-white/30" />
                            <span className="absolute inset-0 flex justify-center">
                                <span className="bg-indigo-900 text-white px-4 text-sm">
                                    Or continue with
                                </span>
                            </span>
                        </div>

                        {/* Social login */}
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={() => handleSocialLogin('google')}
                                className="py-3 border rounded-lg border-white/30 hover:bg-white/10 flex items-center justify-center text-white"
                            >
                                <Chrome className="w-5 h-5 mr-2" /> Google
                            </button>

                            <button
                                type="button"
                                onClick={() => handleSocialLogin('facebook')}
                                className="py-3 border rounded-lg border-white/30 hover:bg-white/10 flex items-center justify-center text-white"
                            >
                                <Facebook className="w-5 h-5 mr-2" /> Facebook
                            </button>
                        </div>
                    </form>
                </motion.div>

                {/* Footer Link */}
                <motion.p variants={itemVariants} className="text-center text-white/80">
                    Don&apos;t have an account?{' '}
                    <Link href="/signup">
                        <button
                            // onClick={() => navigate('/sign-up')}
                            className="text-cyan-400 hover:underline"
                        >
                            Sign up now
                        </button>
                    </Link>
                </motion.p>
            </motion.div>
        </section>
    );
};

export default ConnectHubLoginPage;
