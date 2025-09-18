'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Lock, Eye, EyeOff, User, Phone, Check } from 'lucide-react';

const ConnectHubSignUpPage: React.FC = () => {
    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Step 1 states
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');

    // Step 2 states
    const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delayChildren: 0.3, staggerChildren: 0.2 },
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

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        if (!mobile || !otp) return alert("Please enter mobile and OTP");
        setStep(2);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !password) return alert("Please fill all fields");

        setIsLoading(true);
        await new Promise((res) => setTimeout(res, 1500));
        setIsLoading(false);

        alert(`Signed up successfully! 🎉`);
    };

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-6">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-md space-y-8"
            >
                {/* Header */}
                <motion.h1 variants={itemVariants} className="text-4xl font-bold text-white text-center">
                    Create your{' '}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        ConnectHub
                    </span>{' '}
                    account
                </motion.h1>

                {/* Step Indicator */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-center gap-4 text-white mb-4"
                >
                    {/* Step 1 */}
                    <div className={`flex items-center gap-2 ${step >= 1 ? "text-cyan-400" : "text-white/50"}`}>
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${step >= 1 ? "border-cyan-400 bg-cyan-400 text-black" : "border-white/50"}`}>
                            {step > 1 ? <Check size={18} /> : "1"}
                        </div>
                        <span className="font-medium">Verify Mobile</span>
                    </div>

                    {/* Line */}
                    <div className="w-10 h-[2px] bg-white/40"></div>

                    {/* Step 2 */}
                    <div className={`flex items-center gap-2 ${step === 2 ? "text-cyan-400" : "text-white/50"}`}>
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${step === 2 ? "border-cyan-400 bg-cyan-400 text-black" : "border-white/50"}`}>
                            2
                        </div>
                        <span className="font-medium">Details</span>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-8"
                >
                    {step === 1 ? (
                        // Step 1: Mobile + OTP
                        <form onSubmit={handleNextStep} className="space-y-6">
                            {/* Mobile Number */}
                            <div className="space-y-2">
                                <label htmlFor="mobile" className="text-white font-medium">
                                    Mobile Number
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                                    <input
                                        id="mobile"
                                        type="tel"
                                        placeholder="Enter mobile number"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        className="w-full pl-10 h-12 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                    />
                                </div>
                            </div>

                            {/* OTP */}
                            <div className="space-y-2">
                                <label htmlFor="otp" className="text-white font-medium">
                                    OTP
                                </label>
                                <input
                                    id="otp"
                                    type="text"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className="w-full h-12 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 px-4"
                                />
                            </div>

                            {/* Next Button */}
                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg flex items-center justify-center"
                            >
                                Next <ArrowRight className="w-5 h-5 ml-2" />
                            </motion.button>
                        </form>
                    ) : (
                        // Step 2: Other Fields
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-white font-medium">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full pl-10 h-12 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            {/* <div className="space-y-2">
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
                                        className="w-full pl-10 h-12 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                    />
                                </div>
                            </div> */}

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
                                        placeholder="Create a password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-10 pr-10 h-12 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
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
                                        Sign Up <ArrowRight className="w-5 h-5 ml-2" />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    )}
                </motion.div>

                {/* Footer Link */}
                <motion.p variants={itemVariants} className="text-center text-white/80">
                    Already have an account?{' '}
                    <button className="text-cyan-400 hover:underline">Sign in</button>
                </motion.p>
            </motion.div>
        </section>
    );
};

export default ConnectHubSignUpPage;
