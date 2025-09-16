'use client';

import { AboutSection } from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <StatsSection />
            <TestimonialsSection />
            <PricingSection />
            <ContactSection />
            <Footer />
        </>
    );
}
