import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'security-sandbox',
    question: 'What security guardrails and isolation boundaries are enforced during execution?',
    answer: 'Every tool execution, terminal command, and browser navigation runs inside an ephemeral, micro-isolated container sandbox. Network ingress and egress are governed by granular policy firewalls, and secrets are injected via runtime crypt-vaults with zero data persistence beyond the active task session.'
  },
  {
    id: 'memory-privacy',
    question: 'How does MEERA maintain persistent memory without cross-tenant data leakage?',
    answer: 'MEERA employs a tenant-isolated hybrid vector store and knowledge graph. Each tenant receives a cryptographically dedicated partition with role-based access control (RBAC). No user repository, business logic, or conversational memory is ever utilized to train foundation models.'
  },
  {
    id: 'private-vpc',
    question: 'Can MEERA be deployed entirely within a customer Private VPC or on-premise cluster?',
    answer: 'Yes. Enterprise tiers support deployment via Helm charts onto AWS EKS, GCP GKE, Azure AKS, or bare-metal Kubernetes clusters with complete air-gap support and local inference model routing.'
  },
  {
    id: 'self-healing',
    question: 'How does the autonomous self-healing and reflection loop function on failed tasks?',
    answer: 'When a command or test returns a non-zero exit code or compiler error, MEERA parses the exact stack trace, inspects the git AST diff, creates an isolated rollback checkpoint, formulates an alternative hypothesis, and re-executes tests. In benchmarks, MEERA resolves 94.1% of failures on the first retry without prompting the operator.'
  },
  {
    id: 'model-architecture',
    question: 'Which reasoning models and execution kernels power MEERA?',
    answer: 'MEERA utilizes a multi-model orchestration hierarchy: high-parameter frontier reasoning models handle planning and architecture, while specialized low-latency AST and vision models govern DOM locator synthesis and terminal execution.'
  },
  {
    id: 'single-modality-comparison',
    question: 'How does MEERA compare with single-purpose agents like Devin or Claude Computer Use?',
    answer: 'Unlike Devin which focuses predominantly on text repository patches, or Claude Computer Use which executes basic desktop mouse clicks, MEERA unifies full-stack software development, live browser DOM navigation, media pipeline processing, and cross-system API automation into a single uninterrupted reasoning core.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_DATA[0].id]);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-16 md:py-24 border-t border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="uppercase tracking-wider">
              Enterprise Architecture & Governance
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Frequently Answered Questions
          </h2>
          <p className="text-sm text-slate-300 font-normal leading-relaxed">
            Detailed technical answers regarding sandbox governance, data encryption, and self-healing pipelines.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="agent-glass-panel rounded-xl border border-white/[0.08] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 hover:bg-white/[0.02]"
                >
                  <span className="font-display font-semibold text-white text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans border-t border-white/[0.04] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
