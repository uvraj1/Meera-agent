import React, { useState } from 'react';
import { SKILLS_DATA, SkillItem } from '../data/skills';
import { 
  Code2, Bug, Film, Palette, Search, Globe, FileText, Mail, 
  Workflow, Mic, Brain, Sparkles, ArrowRight, Check
} from 'lucide-react';

interface SkillsGridProps {
  onSelectSkill: (skill: SkillItem) => void;
}

const SKILL_ICONS: Record<string, React.ElementType> = {
  'web-dev': Code2,
  'code-debug': Bug,
  'video-editing': Film,
  'design-ui': Palette,
  'research-data': Search,
  'browser-control': Globe,
  'file-doc': FileText,
  'comms-calendar': Mail,
  'workflow-api': Workflow,
  'voice-audio': Mic,
  'persistent-memory': Brain,
  'self-correction': Sparkles
};

export const SkillsGrid: React.FC<SkillsGridProps> = ({
  onSelectSkill
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities (12)' },
    { id: 'engineering', label: 'Engineering & Architecture' },
    { id: 'multimodal', label: 'Media & Multimodal' },
    { id: 'intelligence', label: 'Intelligence & Reasoning' },
    { id: 'automation', label: 'Browser & Automation' }
  ];

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="capabilities" className="py-16 md:py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="uppercase tracking-wider">
              Core Capabilities
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            12 Autonomous Capabilities. Engineered for Scale.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            MEERA is equipped with specialized reasoning and execution pipelines for each of these core domains.
          </p>
        </div>

        {/* Filter Category Segmented Buttons */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 gap-2 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                    : 'text-slate-400 hover:text-white bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const Icon = SKILL_ICONS[skill.id] || Sparkles;
            return (
              <div
                key={skill.id}
                onClick={() => onSelectSkill(skill)}
                className="group agent-glass-panel agent-glass-panel-hover rounded-xl p-5 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-105 group-hover:border-cyan-400 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-bold">
                      {skill.number}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <span className="uppercase text-cyan-400 font-semibold">{skill.category}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>{skill.speedMetric}</span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {skill.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4 font-sans">
                    {skill.summary}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {skill.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-400">
                        <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="font-mono text-[10px] text-slate-500">
                    {skill.accuracyMetric}
                  </span>
                  <span className="text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1 font-medium text-xs">
                    <span>Inspect Capability</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
