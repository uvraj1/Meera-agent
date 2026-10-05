import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Zap, Clock } from 'lucide-react';
import { MeeraLogo } from './MeeraLogo';
import { openWhatsAppDirect } from '../utils/whatsapp';
import { CONFIG } from '../config';

interface HeroProps {
  onExplore: () => void;
  onRequestAccess: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onRequestAccess }) => {
  return (
    <section id="top" className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden text-center">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-cyan-500/15 via-violet-600/15 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Glowing Official 3D Glass Logo */}
        <div className="flex justify-center">
          <MeeraLogo size="xl" showGlow={true} />
        </div>

        {/* Status Pill / Clean Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Next-Generation Autonomous Intelligence</span>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            One Agent. Every Task.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
              Without Limits.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            MEERA is an autonomous AI agent engineered to write production code, debug errors, navigate browsers, and orchestrate complex tasks 24/7.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => openWhatsAppDirect({ message: 'Hi! I want to request access for MEERA AI.' })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onRequestAccess}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all"
          >
            <span>Request Access Form</span>
          </button>
        </div>

        {/* Simple Trust Signals */}
        <div className="pt-6 grid grid-cols-3 max-w-lg mx-auto border-t border-white/[0.08] text-xs font-mono text-slate-400">
          <div className="space-y-1">
            <div className="font-bold text-white text-base sm:text-lg tabular-nums">98.4%</div>
            <div>Task Success</div>
          </div>
          <div className="space-y-1 border-x border-white/10">
            <div className="font-bold text-cyan-400 text-base sm:text-lg tabular-nums">4.2x</div>
            <div>Faster Output</div>
          </div>
          <div className="space-y-1">
            <div className="font-bold text-emerald-400 text-base sm:text-lg tabular-nums">24/7</div>
            <div>Autonomous</div>
          </div>
        </div>

      </div>
    </section>
  );
};
