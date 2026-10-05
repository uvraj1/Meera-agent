import React, { useState } from 'react';
import { DEMO_SCENARIOS, DemoScenario } from '../data/demos';
import { Play, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface DemosSectionProps {
  onOpenDemoModal: (demo: DemoScenario) => void;
  onRequestAccess: () => void;
}

export const DemosSection: React.FC<DemosSectionProps> = ({
  onOpenDemoModal,
  onRequestAccess
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Case Studies (6)' },
    { id: 'Full-Stack', label: 'Full-Stack Software' },
    { id: 'Debugging', label: 'Automated Debugging' },
    { id: 'Video/Audio', label: 'Media & Subtitles' },
    { id: 'Research', label: 'Market Intelligence' },
    { id: 'Automation', label: 'Workflow Automation' }
  ];

  const filtered = activeCategory === 'all'
    ? DEMO_SCENARIOS
    : DEMO_SCENARIOS.filter((d) => d.category === activeCategory);

  return (
    <section id="casestudies" className="py-16 md:py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="uppercase tracking-wider">
              Verified Case Studies
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Real-World Production Scenarios
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Empirical execution traces showing how MEERA delivers production-ready outcomes without human steering.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 gap-2 mb-8 no-scrollbar">
          {categories.map((c) => {
            const isActive = activeCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05]'
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((demo) => (
            <div
              key={demo.id}
              className="group agent-glass-panel agent-glass-panel-hover rounded-xl border border-white/[0.08] hover:border-cyan-500/30 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg"
            >
              {/* Media Card Thumbnail */}
              <div
                onClick={() => onOpenDemoModal(demo)}
                className="relative h-44 bg-gradient-to-tr from-[#05080e] via-[#0b121e] to-[#0f172a] border-b border-white/[0.08] flex flex-col justify-between p-4 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30 group-hover:opacity-50 transition-opacity" />

                {/* Top Bar inside thumbnail */}
                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10 text-cyan-300 text-[10px]">
                    {demo.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] bg-black/60 px-2 py-0.5 rounded border border-white/10">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{demo.duration}</span>
                  </div>
                </div>

                {/* Center Play Button Overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400/80 flex items-center justify-center text-cyan-300 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                    <Play className="w-5 h-5 ml-0.5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-300 mt-2 font-medium">
                    Inspect Execution Trace
                  </span>
                </div>

                <div className="relative z-10 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                  <span>Tools:</span>
                  <span className="text-slate-300 truncate">
                    {demo.toolsUsed.slice(0, 3).join(', ')}
                  </span>
                </div>
              </div>

              {/* Content Description */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 
                    onClick={() => onOpenDemoModal(demo)}
                    className="font-display text-base font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {demo.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {demo.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-white/[0.06] text-xs font-mono text-slate-400">
                  {demo.outcome.highlights.slice(0, 2).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-between text-xs">
                  <button
                    onClick={() => onOpenDemoModal(demo)}
                    className="text-slate-400 hover:text-white font-medium"
                  >
                    View Breakdown
                  </button>
                  <button
                    onClick={onRequestAccess}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                  >
                    <span>Request Trial</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
