'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            content: "hello@connecthub.com",
            description: "Send us an email anytime"
        },
        {
            icon: Phone,
            title: "Call Us",
            content: "+1 (555) 123-4567",
            description: "Mon-Fri from 8am to 6pm"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            content: "123 Innovation Street, Tech City, TC 12345",
            description: "Come say hello at our office"
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
                            Get in{' '}
                            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                                Touch
                            </span>
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        >
                            Ready to start your influencer marketing journey? We&apos;re here to help you
                            connect, create, and grow your brand presence.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                    Let&apos;s Start a Conversation
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    Whether you&apos;re an influencer looking to monetize your content or a brand
                                    seeking authentic partnerships, we&apos;re here to make it happen.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                                            <info.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">
                                                {info.title}
                                            </h4>
                                            <p className="text-gray-900 font-medium mb-1">
                                                {info.content}
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                {info.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg">
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                                        placeholder="How can we help?"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none"
                                        placeholder="Tell us more about your project..."
                                        required
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                                >
                                    <Send className="w-5 h-5 mr-2" />
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;