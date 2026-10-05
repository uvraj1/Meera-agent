import React from 'react';
import { Code2, Bug, Globe, Film, Search, Sparkles } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      icon: Code2,
      title: 'Full-Stack Software Engineering',
      desc: 'Architects and deploys complete React, Node, and database applications from natural language prompts without manual code scaffolding.'
    },
    {
      icon: Bug,
      title: 'Automated Debugging & Git Patches',
      desc: 'Diagnoses memory leaks, parses runtime crash logs, isolates reproduction test cases, and commits atomic bug fixes automatically.'
    },
    {
      icon: Globe,
      title: 'Browser Navigation & Automation',
      desc: 'Operates headless and visual browsers, interacts with dynamic SPAs, completes multi-step forms, and scrapes verified datasets.'
    },
    {
      icon: Film,
      title: 'Video Editing & Dynamic Subtitles',
      desc: 'Extracts viral video hooks, centers speakers using facial tracking, and renders 60fps kinetic animated word captions via FFmpeg.'
    },
    {
      icon: Search,
      title: 'Deep Research & Citation Synthesis',
      desc: 'Performs multi-source web investigations, reads academic PDFs, cross-checks numerical claims, and produces audited executive dossiers.'
    },
    {
      icon: Sparkles,
      title: 'Autonomous Self-Healing & Memory',
      desc: 'Learns your codebase preferences across sessions, detects build errors on its own, and rolls back and self-heals without human prompts.'
    }
  ];

  return (
    <section id="capabilities" className="py-16 md:py-24 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="uppercase tracking-wider">Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineered to Handle Any Task
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            From technical software engineering to media pipelines, MEERA executes end-to-end without getting stuck.
          </p>
        </div>

        {/* 6 Clean Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="agent-glass-panel rounded-2xl p-6 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
