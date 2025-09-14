'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, TrendingUp, Globe } from 'lucide-react';

const StatsSection: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    const stats = [
        {
            icon: Users,
            number: "50,000+",
            label: "Active Influencers",
            description: "Verified creators across all niches"
        },
        {
            icon: Building2,
            number: "1,200+",
            label: "Partner Brands",
            description: "From startups to Fortune 500"
        },
        {
            icon: TrendingUp,
            number: "15M+",
            label: "Campaign Reach",
            description: "Monthly audience engagement"
        },
        {
            icon: Globe,
            number: "45+",
            label: "Countries",
            description: "Global marketplace coverage"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                        >
                            Trusted by{' '}
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                Thousands
                            </span>
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed"
                        >
                            Join the fastest-growing influencer marketing platform connecting
                            authentic creators with innovative brands worldwide.
                        </motion.p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="text-center group"
                            >
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl mb-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                                    <stat.icon className="w-10 h-10 text-cyan-400" />
                                </div>
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-xl font-semibold text-cyan-400 mb-2">
                                    {stat.label}
                                </div>
                                <div className="text-white/70 text-sm">
                                    {stat.description}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;