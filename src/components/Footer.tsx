import React from 'react';
import { MessageSquare } from 'lucide-react';
import { MeeraLogo } from './MeeraLogo';
import { CONFIG } from '../config';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#05080e] pt-12 pb-10 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <MeeraLogo size="sm" showGlow={false} />
              <span className="font-display font-extrabold text-base text-white tracking-tight">
                MEERA <span className="text-cyan-400 font-bold">AI</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm font-sans">
              One Agent. Every Task. Without Limits. Autonomous AI agent for software engineering & automation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-300 font-medium">
            <button onClick={() => onNavigate('capabilities')} className="hover:text-white transition-colors">
              Capabilities
            </button>
            <button onClick={() => onNavigate('how-it-works')} className="hover:text-white transition-colors">
              How It Works
            </button>
            <button onClick={() => onNavigate('pricing')} className="hover:text-white transition-colors">
              Pricing
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              Contact
            </button>
            <a
              href={`https://wa.me/${CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>{CONFIG.whatsappDisplay}</span>
            </a>
          </div>

        </div>

        {/* Bottom Metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-mono text-[11px]">
          <div>
            &copy; 2026 MEERA AI Systems Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">WhatsApp: {CONFIG.whatsappDisplay}</span>
            <span>·</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Autonomous Agent Online</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
