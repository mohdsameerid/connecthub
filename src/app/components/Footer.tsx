'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    const footerLinks = {
        platform: [
            { name: "For Influencers", href: "#" },
            { name: "For Brands", href: "#" },
            { name: "How It Works", href: "#" },
            { name: "Pricing", href: "#" },
            { name: "Success Stories", href: "#" }
        ],
        resources: [
            { name: "Blog", href: "#" },
            { name: "Help Center", href: "#" },
            { name: "API Documentation", href: "#" },
            { name: "Webinars", href: "#" },
            { name: "Templates", href: "#" }
        ],
        company: [
            { name: "About Us", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Press Kit", href: "#" },
            { name: "Contact", href: "#" },
            { name: "Partners", href: "#" }
        ],
        legal: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "Cookie Policy", href: "#" },
            { name: "GDPR", href: "#" },
            { name: "Security", href: "#" }
        ]
    };

    const socialLinks = [
        { icon: Facebook, href: "#", name: "Facebook" },
        { icon: Twitter, href: "#", name: "Twitter" },
        { icon: Instagram, href: "#", name: "Instagram" },
        { icon: Linkedin, href: "#", name: "LinkedIn" },
        { icon: Youtube, href: "#", name: "YouTube" }
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-7xl mx-auto"
                >
                    {/* Main Footer Content */}
                    <div className="grid lg:grid-cols-6 gap-8 mb-12">
                        {/* Brand Section */}
                        <motion.div variants={itemVariants} className="lg:col-span-2">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-2xl font-bold">ConnectHub</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                                The ultimate platform connecting authentic influencers with innovative brands.
                                Build meaningful partnerships and grow your digital presence.
                            </p>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:text-cyan-400"
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Platform Links */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-lg font-semibold mb-6 text-cyan-400">Platform</h3>
                            <ul className="space-y-3">
                                {footerLinks.platform.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Resources Links */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-lg font-semibold mb-6 text-purple-400">Resources</h3>
                            <ul className="space-y-3">
                                {footerLinks.resources.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Company Links */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-lg font-semibold mb-6 text-pink-400">Company</h3>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Legal Links */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Legal</h3>
                            <ul className="space-y-3">
                                {footerLinks.legal.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Newsletter Signup */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-8 mb-12"
                    >
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-2xl font-bold mb-4">
                                Stay Updated with ConnectHub
                            </h3>
                            <p className="text-gray-300 mb-6">
                                Get the latest insights, tips, and updates delivered to your inbox.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300"
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Bar */}
                    <motion.div
                        variants={itemVariants}
                        className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center"
                    >
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2024 ConnectHub. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <span>Made with ❤️ for creators and brands</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;