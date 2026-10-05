import React from 'react';
import { X, Sparkles, Check, ArrowRight } from 'lucide-react';
import { SkillItem } from '../data/skills';

interface SkillDetailProps {
  skill: SkillItem | null;
  onClose: () => void;
  onRequestAccess: () => void;
}

export const SkillDetailModal: React.FC<SkillDetailProps> = ({
  skill,
  onClose,
  onRequestAccess
}) => {
  if (!skill) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="agent-glass-panel rounded-2xl max-w-2xl w-full border border-white/[0.12] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#0d131f] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-cyan-400 font-bold text-sm">
              CAPABILITY {skill.number}
            </span>
            <span className="text-slate-600">·</span>
            <h3 className="font-display font-bold text-white text-base sm:text-lg">
              {skill.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          
          {/* Detailed Description */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
              Autonomous Architecture & Scope
            </span>
            <p className="text-slate-200">
              {skill.description}
            </p>
          </div>

          {/* Performance & Accuracy Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 space-y-1">
              <span className="text-[11px] font-mono text-slate-400">EXECUTION VELOCITY</span>
              <div className="text-base font-bold font-display text-cyan-300">
                {skill.speedMetric}
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 space-y-1">
              <span className="text-[11px] font-mono text-slate-400">VERIFICATION ACCURACY</span>
              <div className="text-base font-bold font-display text-emerald-400">
                {skill.accuracyMetric}
              </div>
            </div>
          </div>

          {/* Tools Invoked */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
              Native Tool Interfaces
            </span>
            <div className="flex flex-wrap gap-2">
              {skill.toolsUsed.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded bg-[#070b13] border border-cyan-500/30 text-cyan-300 font-mono text-xs"
                >
                  {tool}()
                </span>
              ))}
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
              Production Capabilities
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {skill.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded bg-black/30 border border-white/5 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Task Prompt */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-300 font-bold">
              <span>Benchmark Directive Sample</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div className="text-xs text-slate-200 font-sans italic bg-black/40 p-3 rounded border border-white/5">
              "{skill.samplePrompt}"
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0a0f19] border-t border-white/[0.08] flex items-center justify-between text-xs">
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            Back
          </button>

          <button
            onClick={() => {
              onClose();
              onRequestAccess();
            }}
            className="px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-semibold transition-colors flex items-center gap-1.5"
          >
            <span>Request Access for This Capability</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
