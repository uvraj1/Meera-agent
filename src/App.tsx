import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';
import { openWhatsAppDirect } from './utils/whatsapp';
import { CONFIG } from './config';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#06090e] text-[#e2e8f0] flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200 scroll-smooth">
      
      {/* Top Header */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Smooth Single-Page Presentation Flow */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          onExplore={() => scrollToSection('capabilities')}
          onRequestAccess={() => scrollToSection('contact')}
        />

        {/* Section 2: Core Capabilities */}
        <CapabilitiesSection />

        {/* Section 3: How It Works */}
        <HowItWorksSection />

        {/* Section 4: Pricing Plans */}
        <PricingSection />

        {/* Section 5: Direct WhatsApp Contact & Request */}
        <ContactSection />
      </main>

      {/* Minimalist Corporate Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating 1-Click WhatsApp Quick Button */}
      <button
        onClick={() => openWhatsAppDirect({ message: 'Hi! I would like to get access to MEERA AI.' })}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/60 border border-emerald-400/40 hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        title={`Chat on WhatsApp (${CONFIG.whatsappDisplay})`}
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-mono text-xs font-bold pl-0 group-hover:pl-2">
          {CONFIG.whatsappDisplay}
        </span>
      </button>

    </div>
  );
}
