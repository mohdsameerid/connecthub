'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, BarChart3, Users2, Zap } from 'lucide-react';

const ServicesSection: React.FC = () => {
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

    const services = [
        {
            icon: Megaphone,
            title: "Campaign Management",
            description: "End-to-end campaign management from strategy to execution, ensuring maximum impact and ROI.",
            features: ["Strategy Development", "Content Planning", "Timeline Management", "Quality Control"]
        },
        {
            icon: BarChart3,
            title: "Analytics & Reporting",
            description: "Comprehensive analytics dashboard with real-time insights and detailed performance reports.",
            features: ["Real-time Metrics", "Audience Insights", "ROI Tracking", "Custom Reports"]
        },
        {
            icon: Users2,
            title: "Influencer Matching",
            description: "AI-powered matching system that connects brands with the perfect influencers for their campaigns.",
            features: ["AI Matching", "Audience Analysis", "Brand Alignment", "Performance History"]
        },
        {
            icon: Zap,
            title: "Instant Collaboration",
            description: "Streamlined communication tools and workflow management for seamless brand-influencer collaboration.",
            features: ["Direct Messaging", "File Sharing", "Approval Workflows", "Payment Processing"]
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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
                            Our{' '}
                            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                                Services
                            </span>
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        >
                            Comprehensive solutions designed to maximize your influencer marketing success
                            with cutting-edge technology and expert support.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="flex items-start space-x-6">
                                    <div className="flex-shrink-0">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                            <service.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center text-gray-700">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mr-3"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;