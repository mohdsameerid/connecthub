'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

const PricingSection: React.FC = () => {
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

    const plans = [
        {
            name: "Starter",
            price: "Free",
            period: "forever",
            description: "Perfect for new influencers getting started",
            features: [
                "Basic profile creation",
                "Up to 3 campaign applications",
                "Standard support",
                "Basic analytics",
                "Community access"
            ],
            buttonText: "Get Started",
            popular: false
        },
        {
            name: "Professional",
            price: "$29",
            period: "per month",
            description: "Ideal for growing influencers and small brands",
            features: [
                "Unlimited campaign applications",
                "Advanced analytics dashboard",
                "Priority support",
                "Custom portfolio",
                "Direct brand messaging",
                "Payment protection",
                "Performance insights"
            ],
            buttonText: "Start Free Trial",
            popular: true
        },
        {
            name: "Enterprise",
            price: "$99",
            period: "per month",
            description: "For established brands and agency partners",
            features: [
                "Everything in Professional",
                "Dedicated account manager",
                "Custom integrations",
                "White-label solutions",
                "Advanced reporting",
                "API access",
                "Priority matching",
                "Custom contracts"
            ],
            buttonText: "Contact Sales",
            popular: false
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
                            Choose Your{' '}
                            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                                Plan
                            </span>
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        >
                            Flexible pricing options designed to grow with your influencer marketing journey.
                            Start free and upgrade as you scale.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                                            <Star className="w-4 h-4 mr-1" />
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {plan.name}
                                    </h3>
                                    <div className="mb-4">
                                        <span className="text-4xl font-bold text-gray-900">
                                            {plan.price}
                                        </span>
                                        {plan.price !== "Free" && (
                                            <span className="text-gray-600 ml-2">
                                                /{plan.period}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-600">
                                        {plan.description}
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                                        }`}
                                >
                                    {plan.popular && <Zap className="w-5 h-5 inline mr-2" />}
                                    {plan.buttonText}
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        variants={itemVariants}
                        className="text-center mt-12"
                    >
                        <p className="text-gray-600 mb-4">
                            All plans include our core features and 24/7 support
                        </p>
                        <p className="text-sm text-gray-500">
                            No setup fees • Cancel anytime • 30-day money-back guarantee
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingSection;