'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Truck,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    Shield,
    Users,
    Globe,
    Facebook,
    Chrome,
} from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

interface LoginPageProps {
    onNavigate?: (view: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
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

        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated API call

        setIsLoading(false);
        // onNavigate?.('home');
        alert('Login successful!');
    };

    const handleSocialLogin = (provider: string) => {
        console.log(`Logging in with ${provider}`);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-6">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-md w-full space-y-8"
            >
                {/* Header */}
                <motion.div variants={itemVariants} className="text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <Truck className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-3xl font-bold text-gray-900">True-Ship</span>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                    <p className="text-gray-600">Sign in to your account to continue shipping</p>
                </motion.div>

                {/* Login Form */}
                <motion.div variants={itemVariants}>
                    <div className="shadow-xl border-0 bg-white/95 backdrop-blur-sm rounded-lg">
                        <div className="p-6 px-6">
                            <h2 className="text-2xl font-bold text-gray-900 text-center cursor-pointer">Sign In</h2>
                        </div>

                        <div className="px-6 pb-6">
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={`w-full pl-10 h-12 border rounded-md border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${errors.email ? 'border-red-500 focus:ring-red-200' : ''
                                                }`}
                                            required
                                        />
                                    </div>
                                    {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                                </div>

                                {/* Password Field */}
                                <div className="space-y-2">
                                    <label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className={`w-full pl-10 pr-10 h-12 border rounded-md border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${errors.password ? 'border-red-500 focus:ring-red-200' : ''
                                                }`}
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 text-gray-400 hover:text-gray-600"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                    {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
                                </div>

                                {/* Remember Me and Forgot Password */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            id="remember"
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <label htmlFor="remember" className="text-sm text-gray-700 cursor-pointer">
                                            Remember me
                                        </label>
                                    </div>

                                    <button
                                        type="button"
                                        className="text-blue-600 hover:text-blue-700 p-0 h-auto"
                                    >
                                        Forgot password?
                                    </button>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-md flex items-center justify-center"
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                    ) : (
                                        <>
                                            Sign In <ArrowRight className="w-4 h-4 ml-2" />
                                        </>
                                    )}
                                </button>

                                {/* Separator */}
                                <div className="relative my-4">
                                    <div className="border-t border-gray-300"></div>
                                    <span className="absolute inset-0 flex justify-center">
                                        <span className="bg-white px-4 text-sm text-gray-500">
                                            Or continue with
                                        </span>
                                    </span>
                                </div>

                                {/* Social Login */}
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        onClick={() => handleSocialLogin('google')}
                                        className="h-12 border rounded-md border-gray-200 hover:bg-gray-50 flex items-center justify-center"
                                    >
                                        <Chrome className="w-5 h-5 mr-2" /> Google
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => handleSocialLogin('facebook')}
                                        className="h-12 border rounded-md border-gray-200 hover:bg-gray-50 flex items-center justify-center"
                                    >
                                        <Facebook className="w-5 h-5 mr-2" /> Facebook
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>

                {/* Signup Link */}
                <motion.div variants={itemVariants} className="text-center">
                    <p className="text-gray-600">
                        Don&apos;t have an account?{' '}
                        <button
                            type="button"
                            // onClick={() => navigate('/sign-up')}
                            className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold"
                        >
                            Sign up for free
                        </button>
                    </p>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div variants={itemVariants} className="text-center flex justify-center items-center gap-6 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4" />
                        <span>Secure</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>10K+ Users</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        <span>Global</span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
