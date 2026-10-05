import React from 'react';
import { CheckCircle2, Zap, Layers, RefreshCw } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const stats = [
    {
      label: 'Verified Tasks Executed',
      value: '48,290+',
      detail: 'Across SWE-bench & production repositories',
      icon: CheckCircle2,
      color: 'text-emerald-400'
    },
    {
      label: 'Autonomous Success Rate',
      value: '98.4%',
      detail: 'Zero stuck loops or deadlocks',
      icon: Zap,
      color: 'text-cyan-400'
    },
    {
      label: 'Autonomous Self-Healing',
      value: '94.1%',
      detail: 'First-retry error resolution without operator input',
      icon: RefreshCw,
      color: 'text-violet-400'
    },
    {
      label: 'Integrated Native Tools',
      value: '140+',
      detail: 'Shell, Browser, Git, Docker, and Cloud APIs',
      icon: Layers,
      color: 'text-sky-400'
    }
  ];

  return (
    <section className="py-16 border-t border-white/[0.08] relative bg-[#070b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="uppercase tracking-wider">
              Production Telemetry
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Verified Scale & Performance
          </h2>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="agent-glass-panel rounded-xl p-6 border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-slate-400 font-medium">
                      {s.label}
                    </span>
                    <Icon className={`w-4 h-4 ${s.color}`} />
                  </div>
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight mb-2">
                    {s.value}
                  </div>
                </div>
                <div className="pt-3 border-t border-white/[0.05] text-xs font-mono text-slate-400">
                  {s.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
