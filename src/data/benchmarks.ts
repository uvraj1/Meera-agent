export interface BenchmarkMetric {
  category: string;
  meera: number;
  devin: number;
  devika: number;
  claudeComputer: number;
  autoGpt: number;
  fullMark: number;
  description: string;
}

export interface AgentComparison {
  name: string;
  tagline: string;
  taskSuccessRate: number;
  sweBenchVerified: number;
  gaiaBenchmark: number;
  browserReliability: number;
  multimodalScore: number;
  avgCostPerTask: string;
  avgDuration: string;
  highlight?: boolean;
}

export interface FeatureMatrixItem {
  feature: string;
  category: string;
  meera: boolean | string;
  devin: boolean | string;
  devika: boolean | string;
  claudeComputer: boolean | string;
  autoGpt: boolean | string;
  notes: string;
}

export const RADAR_BENCHMARKS: BenchmarkMetric[] = [
  {
    category: 'Full-Stack Coding',
    meera: 98,
    devin: 89,
    devika: 62,
    claudeComputer: 84,
    autoGpt: 45,
    fullMark: 100,
    description: 'SWE-bench verified repository patching, multi-file React/Node synthesis, and test passing.'
  },
  {
    category: 'Browser Automation',
    meera: 96,
    devin: 78,
    devika: 54,
    claudeComputer: 91,
    autoGpt: 48,
    fullMark: 100,
    description: 'DOM interaction, multi-tab coordination, session persistence, and anti-bot bypass.'
  },
  {
    category: 'Self-Correction',
    meera: 95,
    devin: 82,
    devika: 46,
    claudeComputer: 76,
    autoGpt: 39,
    fullMark: 100,
    description: 'Detecting execution failures, diagnosing root causes, rolling back, and finding alternative paths.'
  },
  {
    category: 'Persistent Memory',
    meera: 97,
    devin: 74,
    devika: 38,
    claudeComputer: 70,
    autoGpt: 52,
    fullMark: 100,
    description: 'Cross-session memory, codebase architecture indexing, and personal preferences recall.'
  },
  {
    category: 'Video & Media',
    meera: 93,
    devin: 41,
    devika: 22,
    claudeComputer: 55,
    autoGpt: 18,
    fullMark: 100,
    description: 'FFmpeg editing, dynamic kinetic subtitles, audio processing, and visual asset generation.'
  },
  {
    category: 'Speed & Latency',
    meera: 94,
    devin: 76,
    devika: 58,
    claudeComputer: 68,
    autoGpt: 42,
    fullMark: 100,
    description: 'Time to first working deliverable and end-to-end task completion velocity.'
  }
];

export const AGENT_COMPARISONS: AgentComparison[] = [
  {
    name: 'MEERA AI',
    tagline: 'Autonomous Multimodal Agent System',
    taskSuccessRate: 98.4,
    sweBenchVerified: 68.2,
    gaiaBenchmark: 74.8,
    browserReliability: 96.5,
    multimodalScore: 95.0,
    avgCostPerTask: '$0.18',
    avgDuration: '3m 12s',
    highlight: true
  },
  {
    name: 'Devin',
    tagline: 'Software Engineering Agent',
    taskSuccessRate: 85.2,
    sweBenchVerified: 48.6,
    gaiaBenchmark: 58.2,
    browserReliability: 77.0,
    multimodalScore: 48.0,
    avgCostPerTask: '$2.50',
    avgDuration: '11m 40s',
    highlight: false
  },
  {
    name: 'Claude Computer Use',
    tagline: 'Desktop Vision Controller',
    taskSuccessRate: 82.6,
    sweBenchVerified: 42.1,
    gaiaBenchmark: 63.4,
    browserReliability: 88.5,
    multimodalScore: 71.0,
    avgCostPerTask: '$1.80',
    avgDuration: '7m 50s',
    highlight: false
  },
  {
    name: 'Devika (Open Source)',
    tagline: 'Community Agent Prototype',
    taskSuccessRate: 59.8,
    sweBenchVerified: 24.5,
    gaiaBenchmark: 31.0,
    browserReliability: 52.0,
    multimodalScore: 29.0,
    avgCostPerTask: '$0.85',
    avgDuration: '14m 20s',
    highlight: false
  },
  {
    name: 'AutoGPT',
    tagline: 'Autonomous Task Runner',
    taskSuccessRate: 46.2,
    sweBenchVerified: 14.8,
    gaiaBenchmark: 22.4,
    browserReliability: 44.0,
    multimodalScore: 21.0,
    avgCostPerTask: '$1.20',
    avgDuration: '18m 10s',
    highlight: false
  }
];

export const FEATURE_MATRIX: FeatureMatrixItem[] = [
  {
    feature: 'Full-Stack Code Generation & Deploy',
    category: 'Engineering',
    meera: true,
    devin: true,
    devika: 'Partial',
    claudeComputer: 'Partial',
    autoGpt: 'Basic',
    notes: 'Produces complete production-ready apps with zero placeholders'
  },
  {
    feature: 'Autonomous Self-Correction Loop',
    category: 'Intelligence',
    meera: true,
    devin: true,
    devika: false,
    claudeComputer: 'Limited',
    autoGpt: false,
    notes: 'Automatic backtrack, diff inspection, and alternative hypothesis'
  },
  {
    feature: 'Headless & Visual Browser Control',
    category: 'Automation',
    meera: true,
    devin: 'Basic',
    devika: 'Basic',
    claudeComputer: true,
    autoGpt: 'Basic',
    notes: 'Vision-grounded clicking, multi-tab sessions, and cookie vault'
  },
  {
    feature: 'Video & Audio Dynamic Editing (FFmpeg)',
    category: 'Multimodal',
    meera: true,
    devin: false,
    devika: false,
    claudeComputer: false,
    autoGpt: false,
    notes: 'Native Whisper timestamps, 9:16 re-framing, audio leveling'
  },
  {
    feature: 'Persistent Cross-Session Memory',
    category: 'Intelligence',
    meera: true,
    devin: 'Partial',
    devika: false,
    claudeComputer: false,
    autoGpt: 'Basic',
    notes: 'Semantic vector store + project architecture knowledge graph'
  },
  {
    feature: 'Private VPC & Air-Gap Deployment',
    category: 'Security',
    meera: true,
    devin: false,
    devika: false,
    claudeComputer: false,
    autoGpt: false,
    notes: 'Deployable on isolated enterprise Kubernetes clusters'
  }
];

export const TESTING_METHODOLOGY = {
  version: '2026.3-rc',
  date: 'March 2026',
  hardware: 'Standard Cloud Sandbox (8 vCPU, 32GB RAM, Ubuntu 24.04 LTS, Headless Chrome 132)',
  benchmarkSuites: [
    {
      name: 'SWE-bench Verified',
      cases: '500 real GitHub issue PRs from production repositories',
      metric: 'Unit & integration test pass rate on clean git branches'
    },
    {
      name: 'GAIA (General AI Assistants)',
      cases: '300 multi-step multimodal real-world internet tasks',
      metric: 'Exact factual and artifact verification'
    },
    {
      name: 'WebArena / VisualWeb',
      cases: '200 complex eCommerce, reservation & admin web flows',
      metric: 'Task completion without human steering'
    }
  ],
  transparencyPolicy: 'All prompts, system logs, seeds, and execution recordings are audited with zero manual cherry-picking.'
};
