import React, { useState } from 'react';
import { USE_CASES } from '../data/useCases';
import { Rocket, Briefcase, Terminal, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

interface UseCasesProps {
  onGetStarted: () => void;
}

const USE_CASE_ICONS: Record<string, React.ElementType> = {
  startups: Rocket,
  freelancers: Briefcase,
  engineers: Terminal,
  researchers: GraduationCap
};

export const UseCasesSection: React.FC<UseCasesProps> = ({
  onGetStarted
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('startups');

  const activeCase = USE_CASES.find((c) => c.id === selectedCaseId) || USE_CASES[0];
  const Icon = USE_CASE_ICONS[activeCase.id] || Rocket;

  return (
    <section id="solutions" className="py-16 md:py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="uppercase tracking-wider">
              Enterprise Solutions
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Solutions for High-Velocity Teams
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Whether deploying production software prototypes or accelerating enterprise delivery pipelines, see how MEERA integrates.
          </p>
        </div>

        {/* Role Selectors */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 gap-2 mb-8 no-scrollbar">
          {USE_CASES.map((uc) => {
            const CaseIcon = USE_CASE_ICONS[uc.id] || Rocket;
            const isActive = uc.id === selectedCaseId;
            return (
              <button
                key={uc.id}
                onClick={() => setSelectedCaseId(uc.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05]'
                }`}
              >
                <CaseIcon className="w-4 h-4" />
                <span>{uc.role}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Role Spotlight Card */}
        <div className="agent-glass-panel rounded-2xl p-6 sm:p-10 border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                {activeCase.role}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeCase.headline}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans pt-1">
                {activeCase.description}
              </p>
            </div>

            {/* Typical Workflows */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                Key Autonomous Workflows
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeCase.typicalWorkflows.map((flow, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300 p-2.5 rounded bg-black/40 border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{flow}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onGetStarted}
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <span>Deploy this solution with MEERA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Quantified Impact Box */}
          <div className="lg:col-span-5 bg-[#070b13] rounded-xl p-6 border border-cyan-500/20 space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-white/[0.08]">
              <Icon className="w-5 h-5 text-cyan-400" />
              <span className="font-display font-bold text-white text-sm">
                Expected Impact Metrics
              </span>
            </div>

            <div className="space-y-4">
              {activeCase.impactMetrics.map((metric, mIdx) => (
                <div key={mIdx} className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">{metric.label}</span>
                  <span className="text-base font-bold font-display text-cyan-300 tabular-nums">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-500 font-mono pt-1">
              *Based on empirical evaluation across 48,000+ benchmark trials.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
