'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const TestimonialsSection: React.FC = () => {
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

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Fashion Influencer",
            followers: "250K followers",
            image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
            content: "ConnectHub transformed my influencer career. The platform's matching system connected me with brands that truly align with my values and audience.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Marketing Director",
            company: "TechFlow Inc.",
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
            content: "The ROI we've achieved through ConnectHub is incredible. Their analytics and influencer vetting process ensures every campaign delivers results.",
            rating: 5
        },
        {
            name: "Emma Rodriguez",
            role: "Lifestyle Creator",
            followers: "180K followers",
            image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
            content: "Finally, a platform that understands creators! The collaboration tools and fair payment system make working with brands seamless and profitable.",
            rating: 5
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
                            What Our{' '}
                            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                                Community
                            </span>{' '}
                            Says
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        >
                            Hear from the influencers and brands who are already experiencing
                            success through our platform.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                    <Quote className="w-12 h-12 text-gray-400" />
                                </div>

                                {/* Rating */}
                                <div className="flex items-center mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                                    {testimonial.content}
                                </p>

                                {/* Author */}
                                <div className="flex items-center">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                        width={48}
                                        height={48}
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {testimonial.role}
                                        </p>
                                        {testimonial.followers && (
                                            <p className="text-xs text-cyan-600 font-medium">
                                                {testimonial.followers}
                                            </p>
                                        )}
                                        {testimonial.company && (
                                            <p className="text-xs text-purple-600 font-medium">
                                                {testimonial.company}
                                            </p>
                                        )}
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

export default TestimonialsSection;