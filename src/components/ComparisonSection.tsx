import React, { useState } from 'react';
import { 
  RADAR_BENCHMARKS, AGENT_COMPARISONS, FEATURE_MATRIX 
} from '../data/benchmarks';
import { Check, X, HelpCircle, BarChart3, Radar as RadarIcon, Table } from 'lucide-react';

interface ComparisonProps {
  onOpenHowWeTested: () => void;
}

export const ComparisonSection: React.FC<ComparisonProps> = ({
  onOpenHowWeTested
}) => {
  const [activeTab, setActiveTab] = useState<'radar' | 'bars' | 'matrix'>('radar');

  const numAxes = RADAR_BENCHMARKS.length;
  const radius = 130;
  const centerX = 180;
  const centerY = 180;

  const getCoordinates = (value: number, index: number, max: number = 100) => {
    const angle = (Math.PI * 2 / numAxes) * index - Math.PI / 2;
    const r = (value / max) * radius;
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    return { x, y };
  };

  const generatePolygonPath = (agentKey: 'meera' | 'devin' | 'claudeComputer' | 'devika' | 'autoGpt') => {
    const points = RADAR_BENCHMARKS.map((m, idx) => {
      const val = m[agentKey];
      const { x, y } = getCoordinates(val, idx, m.fullMark);
      return `${x},${y}`;
    });
    return points.join(' ');
  };

  return (
    <section id="benchmarks" className="py-16 md:py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="uppercase tracking-wider">
              Comparative Benchmarks
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            MEERA Compared to Frontier Baselines
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Transparent empirical evaluation across SWE-bench Verified, GAIA, and autonomous task completion rates.
          </p>
        </div>

        {/* View Switcher Tabs (Segmented Controls) */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="inline-flex p-1 rounded-lg bg-black/40 border border-white/[0.08]">
            <button
              onClick={() => setActiveTab('radar')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'radar'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <RadarIcon className="w-3.5 h-3.5" />
              <span>Skills Radar</span>
            </button>
            <button
              onClick={() => setActiveTab('bars')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'bars'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Task Success Rate (%)</span>
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'matrix'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>Feature Matrix</span>
            </button>
          </div>
        </div>

        {/* TAB 1: RADAR CHART */}
        {activeTab === 'radar' && (
          <div className="agent-glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: SVG Radar Canvas */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center">
              <div className="relative w-[360px] h-[360px] flex items-center justify-center">
                <svg width="360" height="360" className="overflow-visible">
                  {/* Concentric Polygons */}
                  {[0.25, 0.5, 0.75, 1].map((scale, sIdx) => {
                    const polyPoints = RADAR_BENCHMARKS.map((_, idx) => {
                      const { x, y } = getCoordinates(100 * scale, idx, 100);
                      return `${x},${y}`;
                    }).join(' ');
                    return (
                      <polygon
                        key={sIdx}
                        points={polyPoints}
                        fill="none"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="1"
                        strokeDasharray={sIdx < 3 ? '2 2' : 'none'}
                      />
                    );
                  })}

                  {/* Radial Axis Lines & Labels */}
                  {RADAR_BENCHMARKS.map((m, idx) => {
                    const { x, y } = getCoordinates(100, idx, 100);
                    const labelPos = getCoordinates(122, idx, 100);
                    return (
                      <g key={idx}>
                        <line
                          x1={centerX}
                          y1={centerY}
                          x2={x}
                          y2={y}
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="1"
                        />
                        <text
                          x={labelPos.x}
                          y={labelPos.y}
                          textAnchor="middle"
                          dominantBaseline="central"
                          className="text-[10px] font-mono fill-slate-300 font-semibold"
                        >
                          {m.category}
                        </text>
                      </g>
                    );
                  })}

                  {/* Competitor: Devin (Violet) */}
                  <polygon
                    points={generatePolygonPath('devin')}
                    fill="rgba(168, 85, 247, 0.15)"
                    stroke="#A855F7"
                    strokeWidth="1.5"
                    strokeOpacity="0.7"
                  />

                  {/* Competitor: Claude Computer (Amber) */}
                  <polygon
                    points={generatePolygonPath('claudeComputer')}
                    fill="rgba(245, 158, 11, 0.1)"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                  />

                  {/* MEERA AI (Cyan Neon Glow - Top Highlight) */}
                  <polygon
                    points={generatePolygonPath('meera')}
                    fill="rgba(6, 182, 212, 0.35)"
                    stroke="#22D3EE"
                    strokeWidth="2.5"
                    className="filter drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                  />

                  {RADAR_BENCHMARKS.map((m, idx) => {
                    const { x, y } = getCoordinates(m.meera, idx, m.fullMark);
                    return (
                      <circle
                        key={idx}
                        cx={x}
                        cy={y}
                        r="3.5"
                        fill="#22D3EE"
                        stroke="#080B10"
                        strokeWidth="1.5"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Legend with Center Emphasis */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono pt-4">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-400 text-cyan-300 font-bold shadow-sm shadow-cyan-500/20">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>MEERA AI</span>
                </div>
                <div className="flex items-center gap-1.5 text-purple-400">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  <span>Devin</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-400">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>Claude Computer Use</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-slate-500" />
                  <span>Devika / AutoGPT</span>
                </div>
              </div>
            </div>

            {/* Right: Architectural Advantages */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-display text-xl font-bold text-white">
                Architectural Superiority
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                While Devin specializes strictly in text-based git repositories and Claude Computer Use focuses on basic desktop mouse movements, MEERA unites full-stack coding, browser DOM grounding, and video editing into a single autonomous loop.
              </p>

              <div className="space-y-3 pt-2">
                {RADAR_BENCHMARKS.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-white font-semibold">{item.category}</span>
                      <span className="text-cyan-400 font-bold tabular-nums">MEERA {item.meera}/100</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-sans leading-tight">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Methodology link */}
              <div className="pt-2">
                <button
                  onClick={onOpenHowWeTested}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-4 flex items-center gap-1.5"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>View Scientific Testing Methodology</span>
                </button>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: ANIMATED BAR CHARTS */}
        {activeTab === 'bars' && (
          <div className="agent-glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-white/[0.08]">
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Autonomous Task Success Rate Across 500 Verified Trials
                </h3>
                <p className="text-xs text-slate-400">
                  Standardized SWE-bench Verified + GAIA multimodal evaluation suites
                </p>
              </div>
              <button
                onClick={onOpenHowWeTested}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300"
              >
                Inspect test harness &rarr;
              </button>
            </div>

            <div className="space-y-4">
              {AGENT_COMPARISONS.map((agent, aIdx) => {
                const isMeera = agent.highlight;
                return (
                  <div
                    key={aIdx}
                    className={`p-4 rounded-xl border transition-all ${
                      isMeera
                        ? 'bg-cyan-950/20 border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                        : 'bg-black/30 border-white/[0.05]'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        {isMeera && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />}
                        <span className={`text-sm font-bold font-display ${isMeera ? 'text-white' : 'text-slate-300'}`}>
                          {agent.name}
                        </span>
                        <span className="text-slate-500 text-xs hidden sm:inline font-mono">
                          ({agent.tagline})
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs font-mono">
                        <span className="text-slate-400 hidden md:inline">
                          Avg: <strong className="text-slate-200 font-normal">{agent.avgDuration}</strong>
                        </span>
                        <span className={`font-bold tabular-nums text-sm ${isMeera ? 'text-cyan-400' : 'text-slate-300'}`}>
                          {agent.taskSuccessRate}%
                        </span>
                      </div>
                    </div>

                    {/* Bar visualization */}
                    <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden flex">
                      <div
                        className={`h-full transition-all duration-1000 ${
                          isMeera
                            ? 'bg-gradient-to-r from-cyan-400 to-sky-300 shadow-sm shadow-cyan-400'
                            : 'bg-slate-600'
                        }`}
                        style={{ width: `${agent.taskSuccessRate}%` }}
                      />
                    </div>

                    {/* Secondary Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 text-[11px] font-mono text-slate-400">
                      <div>SWE-bench: <span className="text-slate-200">{agent.sweBenchVerified}%</span></div>
                      <div>GAIA Bench: <span className="text-slate-200">{agent.gaiaBenchmark}%</span></div>
                      <div>Browser Reliability: <span className="text-slate-200">{agent.browserReliability}%</span></div>
                      <div>Cost / Task: <span className="text-slate-200">{agent.avgCostPerTask}</span></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: FEATURE MATRIX TABLE */}
        {activeTab === 'matrix' && (
          <div className="agent-glass-panel rounded-2xl border border-white/[0.08] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-[#0b101a] border-b border-white/[0.08] text-slate-400 font-mono">
                    <th className="py-3.5 px-4 font-semibold">Capability</th>
                    <th className="py-3.5 px-4 text-cyan-300 font-bold bg-cyan-950/40 border-x border-cyan-500/20">
                      MEERA AI
                    </th>
                    <th className="py-3.5 px-4">Devin</th>
                    <th className="py-3.5 px-4">Claude Computer</th>
                    <th className="py-3.5 px-4">Devika</th>
                    <th className="py-3.5 px-4">AutoGPT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] font-sans">
                  {FEATURE_MATRIX.map((row, rIdx) => {
                    const renderCell = (val: boolean | string) => {
                      if (val === true) {
                        return <Check className="w-4 h-4 text-emerald-400 inline-block" />;
                      }
                      if (val === false) {
                        return <X className="w-4 h-4 text-rose-500/60 inline-block" />;
                      }
                      return <span className="font-mono text-[10px] text-amber-300">{val}</span>;
                    };

                    return (
                      <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-4">
                          <div className="font-semibold text-white">
                            {row.feature}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono">
                            {row.notes}
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono font-bold bg-cyan-950/20 border-x border-cyan-500/10 text-cyan-300">
                          {renderCell(row.meera)}
                        </td>
                        <td className="py-3 px-4 text-slate-400 font-mono">{renderCell(row.devin)}</td>
                        <td className="py-3 px-4 text-slate-400 font-mono">{renderCell(row.claudeComputer)}</td>
                        <td className="py-3 px-4 text-slate-400 font-mono">{renderCell(row.devika)}</td>
                        <td className="py-3 px-4 text-slate-400 font-mono">{renderCell(row.autoGpt)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-[#0a0e17] border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Audited under standardized test harnesses · Zero manual override</span>
              <button
                onClick={onOpenHowWeTested}
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
              >
                View Full Benchmark Protocol
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
