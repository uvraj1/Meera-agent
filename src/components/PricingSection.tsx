import React from 'react';
import { Check, MessageSquare } from 'lucide-react';
import { openWhatsAppDirect } from '../utils/whatsapp';

export const PricingSection: React.FC = () => {
  const plans = [
    {
      id: 'developer',
      name: 'Developer Pro',
      price: '$29',
      period: '/ month',
      description: 'For engineers & technical creators wanting 24/7 autonomous task execution',
      features: [
        'Single Continuous Execution Thread',
        'Full-Stack Software & React Tooling',
        'Automated Debugging & Git Patch Engine',
        'Persistent Architecture Memory',
        'Standard Email & WhatsApp Support'
      ],
      highlight: false
    },
    {
      id: 'team',
      name: 'Engineering Team',
      price: '$199',
      period: '/ month',
      description: 'For high-velocity startups & software development agencies',
      features: [
        '5 Concurrent Autonomous Agents',
        '4.2x Turbo Execution Pipeline',
        'Headless Browser Automation Cluster',
        'Video Editing & Whisper Audio Pipeline',
        'Shared Codebase Context & Knowledge Graph',
        'Priority WhatsApp & Call Support'
      ],
      highlight: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Swarm',
      price: 'Custom',
      period: 'Annual SLA',
      description: 'For organizations requiring private VPCs and air-gapped clusters',
      features: [
        'Unlimited Concurrent Multi-Agent Fleet',
        'Private VPC & On-Premise Airgap',
        'Custom Internal REST & SQL Connectors',
        'SOC2 Type II & Zero Data Retention',
        'Dedicated 24/7 Solutions Engineer'
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="uppercase tracking-wider">Pricing Plans</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Transparent, Predictable Plans
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Select a plan to start immediately via WhatsApp or request custom enterprise provisioning.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => {
            const isHighlight = p.highlight;
            return (
              <div
                key={p.id}
                className={`agent-glass-panel rounded-2xl p-6 sm:p-8 border flex flex-col justify-between transition-all duration-200 relative ${
                  isHighlight
                    ? 'border-cyan-500/50 bg-cyan-950/20 shadow-xl shadow-cyan-500/10'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                {isHighlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-400 text-[10px] font-mono font-bold text-black shadow-md">
                    POPULAR
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="font-display font-bold text-xl text-white mb-1">
                      {p.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tabular-nums tracking-tight">
                      {p.price}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {p.period}
                    </span>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 pt-4 border-t border-white/[0.06] mb-8">
                    {p.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => openWhatsAppDirect({
                    plan: p.name,
                    message: `Hi! I would like to get started with the ${p.name} plan on MEERA AI.`
                  })}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    isHighlight
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/30'
                      : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Get Started on WhatsApp</span>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
