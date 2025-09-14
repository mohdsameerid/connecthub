'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, TrendingUp, Award } from 'lucide-react';
// import { u } from 'framer-motion/client';

export const AboutSection: React.FC = () => {
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

    const features = [
        {
            icon: Users,
            title: "Connect Authentically",
            description: "Build genuine relationships between brands and influencers based on shared values and audience alignment."
        },
        {
            icon: Target,
            title: "Targeted Campaigns",
            description: "Reach your ideal audience through carefully curated influencer partnerships and data-driven matching."
        },
        {
            icon: TrendingUp,
            title: "Track Performance",
            description: "Monitor campaign success with comprehensive analytics and real-time performance metrics."
        },
        {
            icon: Award,
            title: "Quality Assurance",
            description: "Every influencer is verified and vetted to ensure authentic engagement and professional collaboration."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                        >
                            Why Choose{' '}
                            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                                ConnectHub
                            </span>
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        >
                            We are revolutionizing influencer marketing by creating meaningful connections
                            that drive authentic engagement and measurable results for both brands and creators.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-purple-50 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
