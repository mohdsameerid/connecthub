'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Zap, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut' as const,
            }
        }
    };

    const buttonVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut' as const,
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: 'easeOut' as const,
            }
        }
    };

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        y: [-20, 20, -20],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-10 blur-xl"
                />
                <motion.div
                    animate={{
                        y: [20, -20, 20],
                        rotate: [360, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-10 blur-xl"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full max-w-7xl mx-auto"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
                            >
                                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                                The Future of Influencer Marketing
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
                            >
                                Welcome to{' '}
                                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                    ConnectHub
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
                            >
                                The ultimate platform connecting brands with authentic influencers.
                                Build meaningful partnerships, track campaign performance, and grow your reach
                                in the digital landscape.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                            >
                                <motion.button
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap={{ scale: 0.95 }}
                                    className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                                >
                                    <Users className="w-5 h-5 mr-2" />
                                    Join as Influencer
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                </motion.button>

                                <motion.button
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap={{ scale: 0.95 }}
                                    className="group px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl border-2 border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center"
                                >
                                    <TrendingUp className="w-5 h-5 mr-2" />
                                    Join as Brand
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                </motion.button>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-wrap gap-8 justify-center lg:justify-start text-white/80"
                            >
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">50K+</div>
                                    <div className="text-sm">Active Influencers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">1K+</div>
                                    <div className="text-sm">Partner Brands</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">10M+</div>
                                    <div className="text-sm">Campaign Reach</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Content - Visual Elements */}
                        <div className="relative lg:block hidden">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="relative"
                            >
                                {/* Main Visual Container */}
                                <div className="relative w-full h-96 lg:h-[500px] xl:h-[600px]">
                                    {/* Background Gradient Circle */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>

                                    {/* Center Hub */}
                                    <motion.div
                                        animate={{
                                            rotate: [0, 360],
                                        }}
                                        transition={{
                                            duration: 30,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-white/20 to-white/5 rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center"
                                    >
                                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                                            <Zap className="w-8 h-8 text-white" />
                                        </div>
                                    </motion.div>

                                    {/* Orbiting Elements */}
                                    {[...Array(6)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                rotate: [0, 360],
                                            }}
                                            transition={{
                                                duration: 20 + i * 2,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                            className="absolute top-1/2 left-1/2 w-full h-full"
                                            style={{
                                                transformOrigin: 'center',
                                            }}
                                        >
                                            <div
                                                className={`absolute w-12 h-12 bg-gradient-to-br ${i % 3 === 0 ? 'from-cyan-400 to-blue-500' :
                                                    i % 3 === 1 ? 'from-purple-400 to-pink-500' :
                                                        'from-yellow-400 to-orange-500'
                                                    } rounded-full shadow-lg flex items-center justify-center`}
                                                style={{
                                                    top: `${15 + Math.sin(i * Math.PI / 3) * 30}%`,
                                                    left: `${15 + Math.cos(i * Math.PI / 3) * 30}%`,
                                                }}
                                            >
                                                <Users className="w-6 h-6 text-white" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Wave */}
            {/* <div className="absolute bottom-0 left-0 right-0">
                <svg
                    className="w-full h-20 text-white"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    fill="currentColor"
                >
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                    />
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                    />
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
                </svg>
            </div> */}
        </section>
    )
};

export default HeroSection;