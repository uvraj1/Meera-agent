export interface SkillItem {
  id: string;
  number: string;
  title: string;
  category: 'engineering' | 'multimodal' | 'intelligence' | 'automation';
  summary: string;
  description: string;
  toolsUsed: string[];
  samplePrompt: string;
  speedMetric: string;
  accuracyMetric: string;
  keyFeatures: string[];
}

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Full-Stack Software Engineering',
    category: 'engineering',
    summary: 'Architects and deploys complete React, Next.js, and Node.js applications with databases, authentication, and styling from a single prompt.',
    description: 'MEERA designs state models, generates component hierarchies, configures relational databases, wires authentication webhooks, and verifies zero build errors autonomously.',
    toolsUsed: ['create_file', 'edit_file', 'run_command', 'npm_install', 'vite_bundler', 'wcag_audit'],
    samplePrompt: 'Architect a dark-mode FinTech billing dashboard with live balance streaming, currency conversion, and role-based access control.',
    speedMetric: '3m 40s avg build',
    accuracyMetric: '99.2% build pass',
    keyFeatures: ['Tailwind CSS & modern React architecture', 'Component hierarchy & schema inference', 'Strict TypeScript type safety', 'Autonomous build-error self-healing loop']
  },
  {
    id: 'code-debug',
    number: '02',
    title: 'Automated Debugging & Remediation',
    category: 'engineering',
    summary: 'Traces memory leaks, diagnoses runtime crashes, resolves concurrency contention, and applies atomic git patches.',
    description: 'Performs deep stack-trace parsing, memory flamegraph inspection, reproduction test synthesis, and zero-downtime hot-patching.',
    toolsUsed: ['profiler_audit', 'git_patch', 'run_command', 'ast_parser', 'test_runner'],
    samplePrompt: 'Trace and eliminate the WebSocket connection pool memory leak causing out-of-memory crashes under 10,000 concurrent sockets.',
    speedMetric: '1.8m mean time to fix',
    accuracyMetric: '96.8% bug resolution',
    keyFeatures: ['V8 heap dump & flamegraph diagnostics', 'Automated git branch & patch synthesis', 'Isolated sandbox reproduction tests', 'Zero regressions or deadlocks']
  },
  {
    id: 'video-editing',
    number: '03',
    title: 'Media & Subtitle Processing Pipeline',
    category: 'multimodal',
    summary: 'Extracts viral hooks, reframes to 9:16 using facial tracking, and renders 60fps kinetic animated subtitles.',
    description: 'Integrates FFmpeg media pipelines, Whisper word-level timestamping, OpenCV computer vision tracking, and broadcast loudness normalization.',
    toolsUsed: ['ffmpeg_cli', 'whisper_stt', 'opencv_tracker', 'canvas_overlay', 'audio_normalize'],
    samplePrompt: 'Extract the top 45-second high-energy statement from this keynote, horizontally center the speaker, and burn dynamic word-by-word captions.',
    speedMetric: '4.8x real-time render',
    accuracyMetric: '99.5% audio sync',
    keyFeatures: ['Whisper-based word-level timestamps', 'Automatic silence & pause suppression', 'Dynamic 9:16 vertical re-framing', 'Color grading & loudness normalization']
  },
  {
    id: 'design-ui',
    number: '04',
    title: 'UI Design Systems & Vector Art',
    category: 'multimodal',
    summary: 'Synthesizes enterprise design tokens, color scales, vector illustrations, and responsive wireframes.',
    description: 'Applies typographic hierarchy, mathematical spacing grids, WCAG AA contrast compliance, and scalable vector assets for production applications.',
    toolsUsed: ['svg_generator', 'color_contrast_analyzer', 'design_token_compiler', 'canvas_render'],
    samplePrompt: 'Generate an obsidian-dark design system with 8-point spacing grid, typography tokens, and interactive button variants.',
    speedMetric: '45s generation',
    accuracyMetric: '100% WCAG AA compliance',
    keyFeatures: ['Tailwind CSS token export', 'Zero AI-slop layout geometry', 'High-contrast accessible palettes', 'Clean scalable vector art']
  },
  {
    id: 'research-data',
    number: '05',
    title: 'Deep Research & Market Intelligence',
    category: 'intelligence',
    summary: 'Executes autonomous web crawls, parses scientific literature, cross-verifies empirical claims, and drafts executive dossiers.',
    description: 'Crawls primary sources, analyzes SEC filings and academic journals, eliminates unsubstantiated claims, and synthesizes tables with citation footnotes.',
    toolsUsed: ['search_engine', 'pdf_reader', 'data_frame_pandas', 'chart_generator', 'markdown_compiler'],
    samplePrompt: 'Perform a comparative audit of commercial fusion reactor confinement parameters, Q-factors, and capital expenditure across major labs.',
    speedMetric: '14+ sources synthesized/min',
    accuracyMetric: '98.7% citation accuracy',
    keyFeatures: ['Per-claim source citations', 'Outlier data detection', 'Executive PDF / Markdown export', 'Tabular statistical summaries']
  },
  {
    id: 'browser-control',
    number: '06',
    title: 'Browser Automation & Web Navigation',
    category: 'automation',
    summary: 'Controls headless and visual browsers, interacts with dynamic SPAs, completes multi-step workflows, and extracts unstructured data.',
    description: 'Vision-grounded DOM locator synthesis, dynamic element adaptation, encrypted session persistence, and human-like interaction cadence.',
    toolsUsed: ['playwright_driver', 'dom_accessibility_tree', 'vision_click_locator', 'captcha_solver'],
    samplePrompt: 'Navigate flight comparison portals, track fare fluctuations across dates, select aisle seats, and extract the fare itemization.',
    speedMetric: '1.2s avg page interaction',
    accuracyMetric: '97.4% navigation reliability',
    keyFeatures: ['Robust visual element grounding', 'Multi-tab concurrent session control', 'Encrypted local credential vault', 'Dynamic fallback retry logic']
  },
  {
    id: 'file-doc',
    number: '07',
    title: 'Document & Structured Data Extraction',
    category: 'multimodal',
    summary: 'Parses complex multi-page PDFs, spreadsheets, scanned invoices, legal contracts, and financial disclosures.',
    description: 'Optical Character Recognition (OCR), nested table spatial extraction, clause risk evaluation, and deterministic JSON normalization.',
    toolsUsed: ['tesseract_ocr', 'pdf_plumber', 'xlsx_stream_parser', 'json_validator'],
    samplePrompt: 'Extract line-item details, tax breakdowns, and vendor tax IDs from 150 scanned vendor invoice PDFs into an audited JSON dataset.',
    speedMetric: '25 pages/sec processing',
    accuracyMetric: '99.1% extraction precision',
    keyFeatures: ['Scanned document OCR support', 'Nested multi-column table extraction', 'Deterministic JSON schema output', 'Privacy-first zero external upload']
  },
  {
    id: 'comms-calendar',
    number: '08',
    title: 'Communications & Scheduling Engine',
    category: 'automation',
    summary: 'Triages inboxes, drafts contextual responses, schedules multi-timezone meetings, and synchronizes incident threads.',
    description: 'Autonomous priority classification, calendar conflict resolution, automated invites, and executive daily digest summaries.',
    toolsUsed: ['gmail_api', 'google_calendar_sync', 'slack_bot_webhook', 'nlp_urgency_classifier'],
    samplePrompt: 'Triage unread client communications, flag critical contract signoffs, and draft professional replies for standard meeting requests.',
    speedMetric: '< 3s triage turnaround',
    accuracyMetric: '99.7% intent matching',
    keyFeatures: ['Timezone-aware scheduling', 'Context-aware tone calibration', 'Anti-phishing detection', 'Calendar conflict auto-adjustment']
  },
  {
    id: 'workflow-api',
    number: '09',
    title: 'Distributed Workflow & API Orchestration',
    category: 'automation',
    summary: 'Chains heterogeneous cloud APIs, processes webhooks, manages exponential backoffs, and connects disparate systems.',
    description: 'Dynamic OpenAPI schema consumption, HMAC signature validation, idempotency token injection, and dead-letter queue recovery.',
    toolsUsed: ['rest_http_client', 'webhook_listener', 'rate_limit_queue', 'json_schema_mapper'],
    samplePrompt: 'Listen for Stripe charge webhooks, create invoices in accounting software, provision cloud resources, and dispatch Slack alerts.',
    speedMetric: '180ms pipeline execution',
    accuracyMetric: '99.98% delivery reliability',
    keyFeatures: ['Auto-retry with exponential backoff', 'Encrypted environment variable storage', 'Visual dependency execution graph', 'Dead-letter alerting']
  },
  {
    id: 'voice-audio',
    number: '10',
    title: 'Voice & Conversational Audio Intelligence',
    category: 'multimodal',
    summary: 'Delivers natural conversational speech, transcribes meetings with multi-speaker diarization, and extracts action items.',
    description: 'Sub-400ms end-to-end voice latency, ambient noise suppression, speaker identification, and emotion-aware intonation.',
    toolsUsed: ['neural_tts_engine', 'vad_silence_detector', 'diarization_speaker_id', 'audio_codec_opus'],
    samplePrompt: 'Transcribe this 30-minute executive standup, separate participants, and compile an audited list of assigned deliverables and deadlines.',
    speedMetric: '320ms voice response latency',
    accuracyMetric: '98.9% word accuracy',
    keyFeatures: ['Natural conversational inflection', 'Speaker separation (diarization)', 'Low-latency conversational duplex', 'Custom voice personas']
  },
  {
    id: 'persistent-memory',
    number: '11',
    title: 'Persistent Episodic & Semantic Memory',
    category: 'intelligence',
    summary: 'Retains context across weeks of work, indexing codebase structure, architectural preferences, and proprietary terminology.',
    description: 'Hybrid vector + knowledge graph memory layer with recency decay, contradiction resolution, and cross-session retrieval.',
    toolsUsed: ['hierarchical_graph_db', 'vector_semantic_index', 'context_window_compressor'],
    samplePrompt: 'Recall how our authentication middleware was implemented in last week\'s sprint and apply the exact security pattern to this new endpoint.',
    speedMetric: '42ms memory retrieval',
    accuracyMetric: '99.4% context recall',
    keyFeatures: ['Cross-session memory persistence', 'Repository-specific style adaptation', 'Auto-pruning stale knowledge', 'Strict tenant privacy boundaries']
  },
  {
    id: 'self-correction',
    number: '12',
    title: 'Autonomous Self-Correction & Reflection',
    category: 'intelligence',
    summary: 'Analyzes compilation errors, inspects test failures, modifies its plan, and re-executes without operator intervention.',
    description: 'Tree-of-thought exploration, rollback checkpoints, recursive verification loops, and counterfactual simulation before executing sensitive operations.',
    toolsUsed: ['tree_of_thought_engine', 'rollback_file_snapshot', 'counterfactual_tester', 'lint_validator'],
    samplePrompt: 'Upgrade this legacy Node library, resolve peer dependency incompatibilities, and verify zero regressions with a test suite.',
    speedMetric: '3 retries max before resolution',
    accuracyMetric: '94.1% autonomous recovery',
    keyFeatures: ['Automated rollback on faulty edits', 'Multi-hypothesis test branching', 'Zero prompt nag ("Can I continue?")', 'Transparent reasoning trace']
  }
];
