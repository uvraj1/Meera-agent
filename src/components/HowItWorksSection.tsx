import React from 'react';
import { Terminal, Cpu, CheckCircle2 } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: Terminal,
      title: 'Prompt Your Objective',
      desc: 'Describe what you want built or solved in plain English. No complex configurations or prompt engineering required.'
    },
    {
      num: '02',
      icon: Cpu,
      title: 'Autonomous Execution & Self-Healing',
      desc: 'MEERA formulates a plan, invokes native developer tools, edits files, tests code, and automatically fixes any errors encountered.'
    },
    {
      num: '03',
      icon: CheckCircle2,
      title: 'Receive Production Deliverables',
      desc: 'Inspect tested source code, deployed application previews, or structured research briefs with full execution transparency.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="uppercase tracking-wider">How It Works</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Simple 3-Step Autonomous Flow
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Zero hand-holding. MEERA works continuously until your goal is verified.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="agent-glass-panel rounded-2xl p-6 border border-white/[0.08] relative flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-lg font-bold text-slate-600">
                    {st.num}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-white">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {st.desc}
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
