import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { DemoScenario } from '../data/demos';

interface DemoDetailProps {
  demo: DemoScenario | null;
  onClose: () => void;
  onRequestAccess: () => void;
}

export const DemoDetailModal: React.FC<DemoDetailProps> = ({
  demo,
  onClose,
  onRequestAccess
}) => {
  if (!demo) return null;
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setCurrentStepIdx(0);
    setIsPlaying(true);
  }, [demo.id]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStepIdx((prev) => (prev + 1) % demo.steps.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isPlaying, demo.steps.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="agent-glass-panel rounded-2xl max-w-3xl w-full border border-white/[0.12] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#0d131f] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-xs px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-mono">
              {demo.category}
            </span>
            <h3 className="font-display font-bold text-white text-base sm:text-lg">
              {demo.title}
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
          
          {/* Directive */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
              Execution Directive
            </span>
            <p className="text-slate-200 italic font-sans text-xs">
              "{demo.initialPrompt}"
            </p>
          </div>

          {/* Interactive Player Simulation Bar */}
          <div className="p-4 rounded-xl bg-[#070b13] border border-cyan-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-white font-bold">
                  Step {currentStepIdx + 1} of {demo.steps.length}: {demo.steps[currentStepIdx]?.label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => setCurrentStepIdx(0)}
                  className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Step Detail Card */}
            <div className="p-3 rounded-lg bg-black/60 border border-white/5 space-y-2 font-mono text-xs">
              <p className="text-slate-300 font-sans">
                {demo.steps[currentStepIdx]?.detail}
              </p>
              {demo.steps[currentStepIdx]?.outputSnippet && (
                <div className="text-emerald-400 text-[11px] bg-black/40 p-2 rounded border border-white/5 whitespace-pre-wrap">
                  {demo.steps[currentStepIdx].outputSnippet}
                </div>
              )}
            </div>

            {/* Timeline Progress Line */}
            <div className="flex gap-1.5 pt-1">
              {demo.steps.map((_, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setCurrentStepIdx(sIdx)}
                  className={`h-1.5 flex-1 rounded-full transition-all ${
                    sIdx === currentStepIdx
                      ? 'bg-cyan-400 shadow-sm shadow-cyan-400'
                      : sIdx < currentStepIdx
                      ? 'bg-cyan-700'
                      : 'bg-slate-800'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Outcome Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                Synthesized Artifacts
              </span>
              <div className="space-y-1 font-mono text-xs text-slate-200">
                {demo.outcome.filesCreated.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                Empirical Verification
              </span>
              <div className="space-y-1 font-mono text-xs text-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Duration:</span>
                  <span className="text-cyan-300 font-bold">{demo.outcome.totalTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Assertions Passed:</span>
                  <span className="text-emerald-400 font-bold">{demo.outcome.testsPassed} test assertions</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0a0f19] border-t border-white/[0.08] flex items-center justify-between text-xs">
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            Back
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestAccess();
            }}
            className="px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-semibold flex items-center gap-1.5 transition-colors"
          >
            <span>Request Enterprise Walkthrough</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
