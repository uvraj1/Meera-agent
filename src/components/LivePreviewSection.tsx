import React, { useState, useEffect } from 'react';
import { 
  Globe, Code2, Film, Search, Bot, CheckCircle2, FileCode2, Terminal as TerminalIcon, Eye, Sparkles, ArrowRight
} from 'lucide-react';

interface LivePreviewProps {
  onRequestAccess: () => void;
}

interface PreviewTabConfig {
  id: string;
  name: string;
  icon: React.ElementType;
  prompt: string;
  strategy: string;
  tools: string[];
  steps: {
    title: string;
    action: string;
    log: string;
  }[];
  codeSnippet: string;
  terminalLog: string;
  outputPreview: {
    type: 'browser' | 'video' | 'report' | 'terminal';
    title: string;
    metrics: { label: string; value: string }[];
  };
}

const PREVIEW_TABS: PreviewTabConfig[] = [
  {
    id: 'web',
    name: 'Full-Stack Software',
    icon: Globe,
    prompt: 'Architect and deploy a FinTech treasury dashboard with real-time liquidity streaming, multi-currency conversion, and audit ledger.',
    strategy: 'Generate React architecture, configure strict TypeScript types, bind WebSocket streams, and enforce WCAG AA accessibility baseline.',
    tools: ['create_file', 'edit_file', 'vite_bundler', 'wcag_audit'],
    steps: [
      { title: 'Architecture Scaffolding', action: 'Scaffolding /src/services/TreasuryStream.ts', log: '240 LOC typed' },
      { title: 'Reactive Data Store', action: 'Binding sub-millisecond currency streams', log: 'Zero memory leaks' },
      { title: 'Compilation & Types', action: 'Executing tsc --noEmit && vite build', log: 'Built in 380ms' },
      { title: 'Accessibility Audit', action: 'Verifying contrast ratios and DOM tree', log: '100% WCAG pass' }
    ],
    codeSnippet: `export function TreasuryDashboard() {
  const [balance, setBalance] = useState<number>(124850.40);
  const [currency, setCurrency] = useState<'USD' | 'EUR'>('USD');

  return (
    <div className="p-6 bg-[#0a0f18] text-slate-100 rounded-xl border border-white/10">
      <div className="flex justify-between items-center pb-4 border-b border-white/5">
        <div>
          <span className="text-xs text-slate-400 font-mono">TOTAL REVENUE LIQUIDITY</span>
          <h2 className="text-3xl font-display font-bold text-white tabular-nums">
            \${balance.toLocaleString()}
          </h2>
        </div>
        <span className="text-xs text-emerald-400 font-mono">+18.4% vs benchmark</span>
      </div>
    </div>
  );
}`,
    terminalLog: `meera@kernel:~/workspace$ tsc --noEmit
meera@kernel:~/workspace$ vite build --mode production
vite v8.3.0 building for production...
✓ 48 modules transformed.
dist/assets/index-b48c.js        42.15 kB │ gzip: 14.80 kB
✓ built in 380ms. Exit code 0`,
    outputPreview: {
      type: 'browser',
      title: 'Enterprise Treasury Console v2.4',
      metrics: [
        { label: 'Bundle Size', value: '14.8 kB' },
        { label: 'Load Latency', value: '42ms' },
        { label: 'Lighthouse Score', value: '100/100' }
      ]
    }
  },
  {
    id: 'code',
    name: 'Automated Debugging',
    icon: Code2,
    prompt: 'Trace and resolve CPU spikes and distributed lock deadlocks under high-concurrency write surges.',
    strategy: 'Analyze CPU flamegraph, identify semaphore contention in lock registry, synthesize Redlock protocol with exponential jitter, and execute 5,000 concurrency stress tests.',
    tools: ['profiler_audit', 'git_patch', 'run_command', 'test_runner'],
    steps: [
      { title: 'Contention Diagnosis', action: 'Analyzing CPU flamegraph at /src/cache/lock.ts', log: 'Convoying at line 52' },
      { title: 'Patch Synthesis', action: 'Injecting jitter and non-blocking retry loop', log: 'Atomic patch created' },
      { title: 'Concurrency Verification', action: 'Spawning 5,000 concurrent worker threads', log: '0 deadlocks recorded' }
    ],
    codeSnippet: `// Autonomous Redlock Jitter Implementation
export async function acquireSafeLock(key: string, ttl: number): Promise<boolean> {
  const retryLimit = 3;
  let attempts = 0;
  
  while (attempts < retryLimit) {
    const nonce = crypto.randomUUID();
    const acquired = await redis.set(key, nonce, 'PX', ttl, 'NX');
    if (acquired) return true;
    
    // Exponential backoff with random jitter to eliminate convoying
    const backoff = Math.floor(Math.pow(2, attempts) * 50 + Math.random() * 40);
    await sleep(backoff);
    attempts++;
  }
  return false;
}`,
    terminalLog: `meera@kernel:~/workspace$ node ./stress-test-locks.js
[Thread Pool 01..64] Spawning 5,000 concurrent lock acquisitions...
✓ Total acquisitions: 5,000 / 5,000
✓ Collisions resolved autonomously: 142
✓ Deadlock occurrences: 0
✓ Total duration: 1.18 seconds`,
    outputPreview: {
      type: 'terminal',
      title: 'Concurrency Benchmark Suite',
      metrics: [
        { label: 'CPU Utilization', value: '94% -> 18%' },
        { label: 'Throughput', value: '+340%' },
        { label: 'Latency p99', value: '8ms' }
      ]
    }
  },
  {
    id: 'video',
    name: 'Media & Subtitle Pipeline',
    icon: Film,
    prompt: 'Extract the most engaging 45-second climax from an hour-long keynote, horizontally center speaker using facial tracking, and burn kinetic word-highlighted captions.',
    strategy: 'Transcribe with Whisper Large v3, compute vocal inflection and semantic density, track face via OpenCV, and render 60fps ASS subtitles via FFmpeg.',
    tools: ['whisper_stt', 'opencv_tracker', 'ffmpeg_cli', 'audio_normalizer'],
    steps: [
      { title: 'Speech Transcription', action: 'Processing 3,600s audio with Whisper Large v3', log: 'Extracted 4,200 words' },
      { title: 'Hook Segmentation', action: 'Detecting peak semantic momentum segment', log: 'Clip [14:20 - 15:05]' },
      { title: 'Dynamic Framing', action: 'Applying horizontal face tracking (1080x1920)', log: 'Lossless crop pass' },
      { title: 'Burn Subtitles', action: 'Rendering animated ASS subtitle track at 60 FPS', log: 'Export complete' }
    ],
    codeSnippet: `[Events]
Format: Layer, Start, End, Style, Text
Dialogue: 0,0:00:01.20,0:00:01.50,Cap,{\\c&H00FFFF&}AGENTS{\\c&HFFFFFF&} ARE
Dialogue: 0,0:00:01.50,0:00:01.85,Cap,NOT JUST {\\c&H00FFFF&}CHATBOTS{\\c&HFFFFFF&}
Dialogue: 0,0:00:01.85,0:00:02.40,Cap,THEY RUN {\\c&H00FFFF&}REAL CODE{\\c&HFFFFFF&}`,
    terminalLog: `meera@kernel:~/workspace$ ffmpeg -y -i input.mp4 \\
  -vf "crop=ih*9/16:ih:x_track:0,subtitles=captions.ass" \\
  -c:v libx264 -crf 18 -preset fast -c:a aac -b:a 192k \\
  output_vertical_short.mp4
[libx264 @ 0x559] frame= 2700 fps= 88 size= 24500kB time=00:00:45.00
✓ Render complete in 18.2s`,
    outputPreview: {
      type: 'video',
      title: 'Rendered 9:16 Social Reel Artifact',
      metrics: [
        { label: 'Aspect Ratio', value: '9:16' },
        { label: 'Clip Duration', value: '45.0s' },
        { label: 'Subtitle Sync', value: '99.8%' }
      ]
    }
  },
  {
    id: 'research',
    name: 'Deep Research & Citations',
    icon: Search,
    prompt: 'Perform an exhaustive comparative analysis of commercial fusion reactor confinement parameters, Q-factors, and capital expenditure across major labs.',
    strategy: 'Crawl verified peer-reviewed publications, verify mathematical claims, filter unsubstantiated press releases, and compile an audited executive dossier.',
    tools: ['search_engine', 'pdf_reader', 'data_frame_pandas', 'markdown_compiler'],
    steps: [
      { title: 'Source Scraping', action: 'Querying arXiv, Nature Energy, and SEC records', log: '28 papers retrieved' },
      { title: 'Fact Extraction', action: 'Cross-verifying magnetic vs pulsed target metrics', log: 'Filtered 6 PR claims' },
      { title: 'Table Synthesis', action: 'Compiling structured markdown comparative table', log: 'Normalized Q-factors' }
    ],
    codeSnippet: `| Entity | Plasma Confinement | Target Q-Factor | Projected Net Electricity |
|---|---|---|---|
| Commonwealth Fusion (SPARC) | High-Field Tokamak (REBCO) | Q > 10 (scientific) | 2030 (ARC pilot) |
| Helion Energy (Polaris) | Field-Reversed Configuration (FRC) | Direct D-He3 conversion | 2028 (Microsoft PPA) |
| ITER International | Low-Field Tokamak | Q = 10 (thermal only) | 2039+ (Research only) |`,
    terminalLog: `meera@kernel:~/workspace$ python3 verify_citations.py
Analyzing 28 academic citations...
✓ Citation 01: arXiv:2310.14920 [physics.plasm-ph] -> Verified
✓ Citation 02: Helion SEC Form D (Series E) -> Verified
✓ Citation 03: Nature Energy Vol 9, pp 412-426 -> Verified
Zero unverified assertions found.`,
    outputPreview: {
      type: 'report',
      title: 'Commercial Fusion Technology Audit',
      metrics: [
        { label: 'Sources Audited', value: '28 Papers' },
        { label: 'Hallucination Rate', value: '0.0%' },
        { label: 'Pages Synthesized', value: '18 Pages' }
      ]
    }
  },
  {
    id: 'automation',
    name: 'Distributed Workflows & APIs',
    icon: Bot,
    prompt: 'Listen for inbound enterprise lead webhooks, enrich via Clearbit, evaluate revenue thresholds, create qualified CRM deal, and alert security on-call.',
    strategy: 'Implement idempotency token validation, manage OAuth token refresh lifecycles, enforce rate-limit backoff, and dispatch structured alert cards.',
    tools: ['webhook_listener', 'rest_http_client', 'json_schema_mapper', 'slack_bot_api'],
    steps: [
      { title: 'Webhook Trigger', action: 'Receiving inbound lead payload with HMAC validation', log: 'Lead verified' },
      { title: 'Enrichment Stream', action: 'Querying Clearbit Intelligence API', log: 'Headcount: 240, Series B' },
      { title: 'CRM Deal Creation', action: 'Calling HubSpot Deals API with stage: Qualified', log: 'Deal ID #849201 created' },
      { title: 'Notification Dispatch', action: 'Dispatching rich block card to #leads-vip', log: 'Delivered in 180ms' }
    ],
    codeSnippet: `export async function handleLeadTrigger(lead: LeadPayload) {
  const company = await clearbit.enrich(lead.email);
  if (company.employees >= 50) {
    const deal = await hubspot.deals.create({
      name: \`\${company.name} - Enterprise Inbound\`,
      amount: calculateTierEstimate(company.employees),
      stage: 'QUALIFIED_INBOUND'
    });
    await slack.sendVIPAlert({ company, deal, lead });
  }
}`,
    terminalLog: `meera@kernel:~/workspace$ node ./lead-orchestrator.js
[HTTP 200] Inbound webhook received with HMAC verification
[Enrichment] Domain clearbit.com lookup: 240 headcount confirmed
[HubSpot API] POST /crm/v3/objects/deals -> 201 Created (id: 849201)
[Slack Webhook] POST https://hooks.slack.com/... -> 200 OK
Pipeline completed in 184ms.`,
    outputPreview: {
      type: 'browser',
      title: 'Automated Pipeline Dispatcher',
      metrics: [
        { label: 'Latency', value: '184ms' },
        { label: 'Delivery Rate', value: '100%' },
        { label: 'Error Occurrences', value: '0' }
      ]
    }
  }
];

export const LivePreviewSection: React.FC<LivePreviewProps> = ({
  onRequestAccess
}) => {
  const [activeTabId, setActiveTabId] = useState<string>('web');
  const [activeViewMode, setActiveViewMode] = useState<'preview' | 'code' | 'terminal'>('preview');
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const activeTab = PREVIEW_TABS.find((t) => t.id === activeTabId) || PREVIEW_TABS[0];

  useEffect(() => {
    setCurrentStepIdx(0);
    const interval = setInterval(() => {
      setCurrentStepIdx((prev) => (prev + 1) % activeTab.steps.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [activeTabId, activeTab.steps.length]);

  return (
    <section id="preview" className="py-16 md:py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="uppercase tracking-wider">
              Autonomous Execution Engine
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Continuous Multimodal Workflow Orchestration
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Observe how MEERA formulates architectural plans, executes authenticated tools, compiles type-safe modules, and verifies output in real time.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar mb-8">
          {PREVIEW_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                    : 'text-slate-400 hover:text-white bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Side: Objective, Strategy & Tool Chain */}
          <div className="lg:col-span-5 agent-glass-panel rounded-xl p-5 sm:p-6 border border-white/[0.08] flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              {/* Task Specification */}
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                  Execution Directive
                </span>
                <div className="p-3.5 rounded-lg bg-[#070B12] border border-white/[0.08] text-sm text-slate-200 font-sans leading-relaxed">
                  "{activeTab.prompt}"
                </div>
              </div>

              {/* Agent Strategy */}
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-2 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Autonomous Reasoning Plan</span>
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans bg-white/[0.02] p-3 rounded border border-white/[0.05]">
                  {activeTab.strategy}
                </p>
              </div>

              {/* Tools Active in this Task */}
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                  Authenticated Native Tools
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeTab.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 rounded bg-[#070b12] border border-cyan-500/20 text-cyan-300 font-mono text-[11px]"
                    >
                      {tool}()
                    </span>
                  ))}
                </div>
              </div>

              {/* Execution Pipeline Progression */}
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                  Pipeline Progression
                </span>
                <div className="space-y-2">
                  {activeTab.steps.map((st, idx) => {
                    const isPassed = idx < currentStepIdx;
                    const isCurrent = idx === currentStepIdx;
                    return (
                      <div
                        key={idx}
                        className={`flex items-start gap-2.5 p-2 rounded text-xs transition-colors ${
                          isCurrent
                            ? 'bg-cyan-500/10 text-cyan-200 border border-cyan-500/30'
                            : isPassed
                            ? 'text-slate-400'
                            : 'text-slate-600'
                        }`}
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            isCurrent
                              ? 'text-cyan-400 animate-pulse'
                              : isPassed
                              ? 'text-emerald-400'
                              : 'text-slate-700'
                          }`}
                        />
                        <div className="w-full flex items-center justify-between">
                          <span className="font-medium font-sans">{st.title}</span>
                          <span className="font-mono text-[10px] text-slate-500">{st.log}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06]">
              <button
                onClick={onRequestAccess}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-semibold text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/50 transition-colors"
              >
                <span>Request Dedicated Cluster for This Workflow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Side: Working Artifact Simulator */}
          <div className="lg:col-span-7 agent-glass-panel rounded-xl border border-white/[0.08] flex flex-col overflow-hidden shadow-2xl">
            
            {/* View Mode Bar */}
            <div className="px-4 py-2.5 bg-[#0a0f18] border-b border-white/[0.08] flex items-center justify-between">
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="ml-2 px-2.5 py-0.5 rounded bg-black/40 border border-white/5 text-[11px] font-mono text-slate-400 max-w-[200px] sm:max-w-xs truncate">
                  meera://cluster/{activeTab.id}/verified-artifact
                </div>
              </div>

              {/* View Switchers */}
              <div className="flex items-center gap-1 bg-[#06090e] p-0.5 rounded-lg border border-white/[0.06] text-xs">
                <button
                  onClick={() => setActiveViewMode('preview')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                    activeViewMode === 'preview'
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Artifact</span>
                </button>
                <button
                  onClick={() => setActiveViewMode('code')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                    activeViewMode === 'code'
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <FileCode2 className="w-3.5 h-3.5" />
                  <span>Code</span>
                </button>
                <button
                  onClick={() => setActiveViewMode('terminal')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                    activeViewMode === 'terminal'
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <TerminalIcon className="w-3.5 h-3.5" />
                  <span>Kernel Log</span>
                </button>
              </div>

            </div>

            {/* Display Body */}
            <div className="p-5 flex-1 min-h-[360px] bg-[#070b13] flex flex-col justify-between overflow-y-auto">
              
              {activeViewMode === 'preview' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <div>
                      <h3 className="font-display font-bold text-white text-base">
                        {activeTab.outputPreview.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        Autonomous production output verified by hermetic sandbox
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                      ✓ Production Verified
                    </span>
                  </div>

                  {activeTab.id === 'web' && (
                    <div className="p-4 rounded-lg bg-[#0e1624] border border-cyan-500/20 space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded bg-black/40 border border-white/5">
                          <span className="text-[10px] font-mono text-slate-400">AGGREGATE TREASURY BALANCE</span>
                          <div className="text-xl font-bold font-display text-white tabular-nums">$124,850.40</div>
                          <span className="text-[10px] text-emerald-400 font-mono">+18.4% vs benchmark</span>
                        </div>
                        <div className="p-3 rounded bg-black/40 border border-white/5">
                          <span className="text-[10px] font-mono text-slate-400">ACTIVE CLIENT NODES</span>
                          <div className="text-xl font-bold font-display text-white tabular-nums">14,290</div>
                          <span className="text-[10px] text-cyan-400 font-mono">0.00% packet drop</span>
                        </div>
                      </div>
                      
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-mono text-slate-400">
                          <span>Real-Time Stream Ingestion</span>
                          <span>1,420 req/sec</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden flex">
                          <div className="h-full bg-cyan-400 w-[65%]" />
                          <div className="h-full bg-violet-500 w-[20%]" />
                          <div className="h-full bg-emerald-400 w-[15%]" />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab.id === 'code' && (
                    <div className="p-4 rounded-lg bg-[#0e1624] border border-cyan-500/20 space-y-3 font-mono text-xs">
                      <div className="text-slate-300 font-semibold flex items-center justify-between">
                        <span>Resolved Concurrency Contention: /src/cache/lock.ts</span>
                        <span className="text-emerald-400">5,000 Parallel Workers</span>
                      </div>
                      <div className="p-3 rounded bg-black/60 border border-emerald-500/30 text-emerald-300">
                        ✓ All 5,000 threads safely acquired distributed locks with zero deadlocks.
                      </div>
                    </div>
                  )}

                  {activeTab.id === 'video' && (
                    <div className="p-4 rounded-lg bg-[#0e1624] border border-cyan-500/20 space-y-3">
                      <div className="w-full h-44 rounded-lg bg-gradient-to-tr from-slate-900 via-slate-800 to-cyan-950 flex flex-col items-center justify-center border border-white/10 relative overflow-hidden">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 shadow-lg shadow-cyan-500/20">
                          <Film className="w-5 h-5" />
                        </div>
                        <div className="mt-3 text-center">
                          <p className="text-xs font-mono font-bold text-white tracking-wide">
                            "AGENTS ARE NOT JUST CHATBOTS"
                          </p>
                          <span className="text-[10px] text-yellow-300 font-mono">Dynamic Kinetic Captions (ASS 60fps)</span>
                        </div>
                        <span className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-400 bg-black/60 px-1.5 py-0.5 rounded">
                          00:45.00 / 1080x1920 (9:16)
                        </span>
                      </div>
                    </div>
                  )}

                  {activeTab.id === 'research' && (
                    <div className="p-4 rounded-lg bg-[#0e1624] border border-cyan-500/20 space-y-2 text-xs">
                      <div className="font-semibold text-slate-200">Verified Synthesis Matrix</div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left font-mono text-[11px] text-slate-300">
                          <thead>
                            <tr className="border-b border-white/10 text-cyan-400">
                              <th className="py-1">Entity</th>
                              <th className="py-1">Confinement</th>
                              <th className="py-1">Verified Q-Factor</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            <tr>
                              <td className="py-1.5 font-bold text-white">SPARC (CFS)</td>
                              <td>REBCO Tokamak</td>
                              <td className="text-emerald-400">Q &gt; 10</td>
                            </tr>
                            <tr>
                              <td className="py-1.5 font-bold text-white">Helion Polaris</td>
                              <td>Pulsed FRC</td>
                              <td className="text-cyan-400">Direct D-He3</td>
                            </tr>
                            <tr>
                              <td className="py-1.5 font-bold text-white">ITER</td>
                              <td>Low-Field Tokamak</td>
                              <td className="text-amber-400">Q = 10 (Thermal)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {activeTab.id === 'automation' && (
                    <div className="p-4 rounded-lg bg-[#0e1624] border border-cyan-500/20 space-y-3 font-mono text-xs">
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Webhook Ingestion &rarr; Clearbit Enrichment &rarr; CRM &rarr; Slack</span>
                      </div>
                      <div className="p-3 rounded bg-black/40 border border-white/5 text-[11px] text-slate-300 space-y-1">
                        <div>&gt; Lead: acme_inc@enterprise.com (HMAC Verified)</div>
                        <div>&gt; Clearbit: 240 headcount, Series B financing</div>
                        <div>&gt; CRM: Deal #849201 dispatched (\$48,000 ARR)</div>
                        <div className="text-cyan-300">&gt; Security Alert: Slack #leads-vip notified in 184ms</div>
                      </div>
                    </div>
                  )}

                  {/* Verifiable Output Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {activeTab.outputPreview.metrics.map((m, idx) => (
                      <div key={idx} className="p-2 rounded bg-black/30 border border-white/5 text-center">
                        <div className="text-[10px] text-slate-400 font-mono uppercase">{m.label}</div>
                        <div className="text-sm font-bold text-cyan-300 font-mono tabular-nums">{m.value}</div>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {activeViewMode === 'code' && (
                <div className="rounded bg-[#05080e] p-3 font-mono text-xs text-slate-200 overflow-x-auto border border-white/5 h-full">
                  <div className="text-[10px] text-slate-500 pb-2 border-b border-white/5 mb-2 flex justify-between">
                    <span>Synthesized TypeScript Module</span>
                    <span className="text-cyan-400">Strict Type Checking</span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed font-mono">
                    {activeTab.codeSnippet}
                  </pre>
                </div>
              )}

              {activeViewMode === 'terminal' && (
                <div className="rounded bg-[#05080e] p-3 font-mono text-xs text-slate-300 overflow-x-auto border border-white/5 h-full">
                  <div className="text-[10px] text-slate-500 pb-2 border-b border-white/5 mb-2 flex justify-between">
                    <span>Execution Kernel Log</span>
                    <span className="text-emerald-400">Exit Code 0</span>
                  </div>
                  <pre className="text-emerald-300/90 leading-relaxed font-mono">
                    {activeTab.terminalLog}
                  </pre>
                </div>
              )}

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px]">
                  State: <strong className="text-emerald-400 font-normal">Passed</strong> · Memory: <strong className="text-slate-300 font-normal">18.4 MB</strong>
                </span>
                <span className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer" onClick={onRequestAccess}>
                  Request Enterprise Cluster &rarr;
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
