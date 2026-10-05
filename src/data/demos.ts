export interface DemoStep {
  phase: 'think' | 'tool' | 'bash' | 'code' | 'verify';
  label: string;
  detail: string;
  outputSnippet?: string;
  durationMs: number;
}

export interface DemoScenario {
  id: string;
  title: string;
  duration: string;
  category: 'Full-Stack' | 'Debugging' | 'Video/Audio' | 'Research' | 'Automation' | 'Enterprise';
  description: string;
  initialPrompt: string;
  toolsUsed: string[];
  steps: DemoStep[];
  outcome: {
    filesCreated: string[];
    testsPassed: number;
    totalTime: string;
    highlights: string[];
  };
  mockPreviewType: 'browser' | 'terminal' | 'diff' | 'video' | 'report';
}

export const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: 'saas-web',
    title: 'Full-Stack SaaS Platform with Billing & Auth',
    duration: '4m 12s',
    category: 'Full-Stack',
    description: 'MEERA designed the database schema, built the React UI, integrated Stripe checkout webhooks, and deployed with passing tests.',
    initialPrompt: 'Build a dark-mode SaaS subscription platform for developer analytics with Google Auth, Stripe pricing table, and live chart telemetry.',
    toolsUsed: ['create_file', 'edit_file', 'run_command', 'vite_bundler'],
    steps: [
      {
        phase: 'think',
        label: 'Architecting Stack & State Hierarchy',
        detail: 'Analyzing database constraints (User, Subscription, AnalyticsEvent) and scoping client routing.',
        durationMs: 900
      },
      {
        phase: 'tool',
        label: 'Scaffolding Core App Structure',
        detail: 'Calling create_file: src/components/Dashboard.tsx, src/lib/stripe.ts, src/types.ts',
        outputSnippet: 'Created 4 source files. Initialized Tailwind configuration.',
        durationMs: 1400
      },
      {
        phase: 'code',
        label: 'Writing Reactive Chart Engine',
        detail: 'Implementing SVG Canvas telemetry with 60 FPS interpolated rendering and real-time event updates.',
        outputSnippet: 'export const TelemetryStream = ({ data }: StreamProps) => ...',
        durationMs: 1600
      },
      {
        phase: 'bash',
        label: 'Compiling & Running Health Audit',
        detail: 'Executing: tsc --noEmit && npm run build',
        outputSnippet: '✓ 142 modules transformed.\n✓ built in 380ms. Zero warnings.',
        durationMs: 1200
      },
      {
        phase: 'verify',
        label: 'Autonomous Visual Inspection',
        detail: 'Inspecting DOM accessibility tree, verifying contrast >= 4.5:1, and simulating Stripe webhook payload.',
        outputSnippet: 'HTTP 200 OK: Stripe event customer.subscription.created verified.',
        durationMs: 1000
      }
    ],
    outcome: {
      filesCreated: ['src/App.tsx', 'src/components/Pricing.tsx', 'src/components/Dashboard.tsx', 'src/lib/stripe.ts'],
      testsPassed: 14,
      totalTime: '4m 12s',
      highlights: ['100% TypeScript typed', 'Responsive mobile + desktop layout', 'Stripe checkout verified in sandbox']
    },
    mockPreviewType: 'browser'
  },
  {
    id: 'memory-leak-fix',
    title: 'Autonomous Concurrency Memory Leak Remediation',
    duration: '2m 18s',
    category: 'Debugging',
    description: 'Diagnosed an unclosed WebSocket event listener causing 1.4GB RAM spikes, synthesized reproductive tests, and applied patch.',
    initialPrompt: 'Our production Node backend crashes with OOM error every 6 hours under WebSocket load. Trace and resolve the memory leak.',
    toolsUsed: ['inspect_profiler', 'git_patch', 'run_command', 'test_runner'],
    steps: [
      {
        phase: 'think',
        label: 'Heap Snapshot Analysis',
        detail: 'Inspecting V8 heap dump: Identifying 48,000 orphaned EventListener references tied to SocketPool.js.',
        durationMs: 1100
      },
      {
        phase: 'bash',
        label: 'Reproducing in Isolated Sandbox',
        detail: 'Running artillery stress script with 2,000 synthetic WebSocket reconnect loops.',
        outputSnippet: 'Memory climb: 120MB -> 840MB -> 1.42GB (Leak confirmed at line 94).',
        durationMs: 1500
      },
      {
        phase: 'code',
        label: 'Refactoring Cleanup Lifecycle',
        detail: 'Patching SocketPool.js with WeakMap listener registry and explicit socket.removeListener on disconnect.',
        outputSnippet: '- socket.on("message", handlePacket);\n+ socket.on("message", boundHandler);\n+ socket.once("close", () => socket.off("message", boundHandler));',
        durationMs: 1300
      },
      {
        phase: 'verify',
        label: 'Verification Stress Benchmark',
        detail: 'Re-running artillery test suite: memory stable at 124MB flat across 10,000 cycles.',
        outputSnippet: '✓ PASS: SocketPool.test.ts (10,000 iterations, 0 bytes leaked).',
        durationMs: 1000
      }
    ],
    outcome: {
      filesCreated: ['src/services/SocketPool.ts', 'tests/memory-stress.test.ts'],
      testsPassed: 8,
      totalTime: '2m 18s',
      highlights: ['91% heap reduction under peak load', 'Reproduced & verified autonomously', 'Atomic git commit created']
    },
    mockPreviewType: 'diff'
  },
  {
    id: 'market-research',
    title: 'Deep Market Research & Verified Technical Report',
    duration: '3m 45s',
    category: 'Research',
    description: 'Synthesized 42 primary energy storage papers, scraped patent filings, and compiled an executive summary with cost benchmarks.',
    initialPrompt: 'Research Sodium-ion vs Solid-State battery commercialization timelines, cost per kWh projections, and leading OEM supply agreements.',
    toolsUsed: ['search_engine', 'pdf_reader', 'data_frame_pandas', 'chart_generator'],
    steps: [
      {
        phase: 'tool',
        label: 'Scraping Publications & Disclosures',
        detail: 'Querying 24 academic journals, BloombergNEF press archives, and OEM quarterly filings.',
        outputSnippet: 'Retrieved 42 documents (avg source credibility score: 9.4/10).',
        durationMs: 1300
      },
      {
        phase: 'think',
        label: 'Cross-Verifying Numerical Claims',
        detail: 'Filtering marketing claims vs independently verified battery lab test cycle counts.',
        durationMs: 1100
      },
      {
        phase: 'code',
        label: 'Synthesizing Comparative Cost Models',
        detail: 'Generating Python matplotlib projections: $48/kWh sodium-ion floor by Q4 2027.',
        outputSnippet: 'Rendered vector figures: cost_trajectory_2026_2030.svg',
        durationMs: 1500
      },
      {
        phase: 'verify',
        label: 'Compiling Executive Dossier',
        detail: 'Formatting executive summary with 48 numbered bibliographic citations and risk matrix.',
        outputSnippet: 'Exported: battery_market_audit_2026.pdf (24 pages)',
        durationMs: 900
      }
    ],
    outcome: {
      filesCreated: ['reports/battery_commercialization_2026.md', 'charts/cost_curves.svg'],
      testsPassed: 42,
      totalTime: '3m 45s',
      highlights: ['Zero hallucinated citations', 'Tabular degradation comparison', 'Executive-ready formatting']
    },
    mockPreviewType: 'report'
  },
  {
    id: 'video-editing-demo',
    title: 'Automated Keynote Cut & Kinetic Subtitles',
    duration: '1m 55s',
    category: 'Video/Audio',
    description: 'Extracted viral 45-second hook from 1-hour interview, transcribed word-by-word with Whisper, and rendered animated subtitles.',
    initialPrompt: 'Take this keynote MP4, find the most emotionally engaging statement about AI reasoning, and render a 9:16 social clip.',
    toolsUsed: ['ffmpeg_cli', 'whisper_stt', 'opencv_tracker', 'audio_normalize'],
    steps: [
      {
        phase: 'tool',
        label: 'Transcribing & Sentiment Mapping',
        detail: 'Running Whisper Large v3 to extract word-level timestamps and vocal inflection intensity.',
        outputSnippet: 'Peak interest inflection detected at [18:24 - 19:09]: "Reasoning without self-correction is just guessing."',
        durationMs: 1200
      },
      {
        phase: 'bash',
        label: 'FFmpeg Lossless Crop & Dynamic Face Centering',
        detail: 'Applying dynamic horizontal tracking: ffmpeg -i raw.mp4 -vf "crop=ih*9/16:ih:x_offset:0" -c:a copy.',
        outputSnippet: 'Extracted 45.2s clip. Aspect ratio converted to 1080x1920.',
        durationMs: 1400
      },
      {
        phase: 'code',
        label: 'Generating Kinetic Highlight Overlays',
        detail: 'Generating ASS subtitle track with custom styling on spoken syllables.',
        outputSnippet: 'Dialogue: 0,0:00:02.10,0:00:02.40,Caption,,{\\c&H00FFFF&}REASONING{\\c&HFFFFFF&} WITHOUT...',
        durationMs: 1300
      },
      {
        phase: 'verify',
        label: 'Audio Normalization & Render',
        detail: 'Applying EBU R128 loudness normalization (-14 LUFS) and rendering final MP4.',
        outputSnippet: '✓ Output rendered: keynote_viral_clip_9x16.mp4 (48.4MB, 60fps).',
        durationMs: 900
      }
    ],
    outcome: {
      filesCreated: ['exports/keynote_viral_clip_9x16.mp4', 'subtitles/kinetic_captions.ass'],
      testsPassed: 6,
      totalTime: '1m 55s',
      highlights: ['Sub-frame word sync', 'Face centered automatically', 'Broadcast-standard -14 LUFS audio']
    },
    mockPreviewType: 'video'
  },
  {
    id: 'web-automation-demo',
    title: 'Visual Browser Booking & Multi-Step Flow',
    duration: '2m 40s',
    category: 'Automation',
    description: 'Controlled visual browser, completed flight seat reservation, filled passenger details, and grabbed confirmation invoice.',
    initialPrompt: 'Search non-stop flights from Delhi to Singapore for May 12, select an aisle seat, and extract the fare breakdown.',
    toolsUsed: ['playwright_driver', 'vision_click_locator', 'dom_accessibility_tree'],
    steps: [
      {
        phase: 'tool',
        label: 'Navigating Dynamic Overlays',
        detail: 'Handling cookie consent modal, selecting date picker from dynamic calendar overlay.',
        outputSnippet: 'Found 14 flight results. Sorting by non-stop + lowest price.',
        durationMs: 1200
      },
      {
        phase: 'think',
        label: 'Visual Seat Map Parsing',
        detail: 'Analyzing interactive aircraft seat grid for available aisle seating in rows 10-18.',
        durationMs: 1000
      },
      {
        phase: 'tool',
        label: 'Form Input & Data Masking',
        detail: 'Injecting passenger passport details via encrypted local keystroke driver.',
        outputSnippet: 'Passenger record verified. Total fare: $284 SGD (no baggage fees added).',
        durationMs: 1400
      },
      {
        phase: 'verify',
        label: 'Extracting Confirmation Artifact',
        detail: 'Saving complete booking itinerary & payment token receipt.',
        outputSnippet: 'Downloaded: itinerary_SIN_DL_2026.pdf',
        durationMs: 800
      }
    ],
    outcome: {
      filesCreated: ['receipts/itinerary_SIN_2026.pdf', 'data/fare_breakdown.json'],
      testsPassed: 10,
      totalTime: '2m 40s',
      highlights: ['Zero human typing required', 'Verified baggage policy', 'Encrypted local credentials']
    },
    mockPreviewType: 'browser'
  },
  {
    id: 'crm-automation-demo',
    title: 'Support Triage & 500 Ticket CRM Synchronization',
    duration: '3m 10s',
    category: 'Enterprise',
    description: 'Categorized 500 customer emails, routed VIP issues to Slack, resolved 380 routine queries, and updated CRM.',
    initialPrompt: 'Triage our backlog of 500 support tickets, classify by sentiment and urgent bug report, and draft personalized replies.',
    toolsUsed: ['rest_http_client', 'nlp_urgency_classifier', 'salesforce_api', 'slack_bot_webhook'],
    steps: [
      {
        phase: 'tool',
        label: 'Batch Fetching Inboxes',
        detail: 'Streaming 500 unassigned tickets through semantic classifier pipeline.',
        outputSnippet: '380 Routine FAQs (Billing, Password, Docs)\n88 Feature requests\n32 Critical bugs',
        durationMs: 1100
      },
      {
        phase: 'code',
        label: 'Alerting for Critical Bug Tickets',
        detail: 'Generating engineering incident summaries with reproduction steps and log payloads.',
        outputSnippet: 'Sent 32 structured alerts to #eng-triage with Sentry link.',
        durationMs: 1400
      },
      {
        phase: 'bash',
        label: 'Drafting 380 Context-Aware Responses',
        detail: 'Injecting verified user account data, drafting courteous personalized answers.',
        outputSnippet: '380 draft responses queued for 1-click dispatch.',
        durationMs: 1500
      },
      {
        phase: 'verify',
        label: 'Updating CRM Records',
        detail: 'Syncing ticket tags and sentiment score to Salesforce and HubSpot.',
        outputSnippet: '✓ 500 customer records updated in 188ms.',
        durationMs: 800
      }
    ],
    outcome: {
      filesCreated: ['reports/daily_support_triage.json'],
      testsPassed: 500,
      totalTime: '3m 10s',
      highlights: ['94.2% resolution rate', '0 customer data leakage', 'Average response time < 4 seconds']
    },
    mockPreviewType: 'terminal'
  }
];
