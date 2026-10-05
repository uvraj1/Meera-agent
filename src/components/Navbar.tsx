import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { MeeraLogo } from './MeeraLogo';
import { CONFIG } from '../config';
import { openWhatsAppDirect } from '../utils/whatsapp';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#06090e]/90 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand with 3D Glass Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('top');
          }}
          className="flex items-center gap-2.5 group"
        >
          <MeeraLogo size="md" className="group-hover:scale-105 transition-transform" />
          <span className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight">
            MEERA <span className="text-cyan-400 font-bold">AI</span>
          </span>
        </a>

        {/* Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => onNavigate('capabilities')}
            className="hover:text-white transition-colors"
          >
            Capabilities
          </button>
          <button
            onClick={() => onNavigate('how-it-works')}
            className="hover:text-white transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => onNavigate('pricing')}
            className="hover:text-white transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-white transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* WhatsApp Direct Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => openWhatsAppDirect({ message: 'Hi! I would like to request access for MEERA AI.' })}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">WhatsApp Us</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>
        </div>

      </div>
    </header>
  );
};
