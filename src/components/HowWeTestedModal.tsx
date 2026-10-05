import React from 'react';
import { X, ShieldCheck, Cpu } from 'lucide-react';
import { TESTING_METHODOLOGY } from '../data/benchmarks';

interface HowWeTestedProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HowWeTestedModal: React.FC<HowWeTestedProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="agent-glass-panel rounded-2xl max-w-3xl w-full border border-white/[0.12] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#0d131f] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <h3 className="font-display font-bold text-white text-base sm:text-lg">
              Benchmark Testing Methodology
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          
          <div className="space-y-2">
            <h4 className="font-display font-bold text-white text-sm sm:text-base">
              Scientifically Grounded Evaluation
            </h4>
            <p>
              Every benchmark score published on MEERA is measured under isolated, hermetic conditions using official public benchmarks without human intervention or test cherry-picking.
            </p>
          </div>

          {/* Test Hardware & Environment */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 font-mono text-xs">
            <div className="text-cyan-400 font-bold flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Standard Evaluation Hardware</span>
            </div>
            <div className="text-slate-300">{TESTING_METHODOLOGY.hardware}</div>
            <div className="text-slate-500 text-[11px]">Audit Version: {TESTING_METHODOLOGY.version} · {TESTING_METHODOLOGY.date}</div>
          </div>

          {/* Benchmark Suites List */}
          <div className="space-y-3">
            <h5 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Evaluation Suites
            </h5>
            <div className="grid grid-cols-1 gap-3">
              {TESTING_METHODOLOGY.benchmarkSuites.map((suite, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-[#070b13] border border-white/5 space-y-1">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="font-bold text-white">{suite.name}</span>
                    <span className="text-cyan-400">{suite.cases}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-sans">
                    <strong>Primary Metric:</strong> {suite.metric}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Zero Cherry-Picking Policy */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-2">
            <div className="font-bold text-cyan-300 text-xs font-mono uppercase">
              Zero Cherry-Picking Guarantee
            </div>
            <p className="text-xs text-slate-300">
              {TESTING_METHODOLOGY.transparencyPolicy}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0a0f19] border-t border-white/[0.08] flex items-center justify-between text-xs">
          <span className="text-slate-500 font-mono">
            Audited for SWE-bench & GAIA 2026
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
