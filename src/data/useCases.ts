export interface UseCaseItem {
  id: string;
  role: string;
  headline: string;
  description: string;
  impactMetrics: { label: string; value: string }[];
  typicalWorkflows: string[];
}

export const USE_CASES: UseCaseItem[] = [
  {
    id: 'startups',
    role: 'Startups & Technical Founders',
    headline: 'Ship production MVP in 48 hours instead of 6 months',
    description: 'Deploy complete full-stack web applications, setup payment billing, build product landing pages, and handle initial customer onboarding without hiring a full engineering department upfront.',
    impactMetrics: [
      { label: 'Time-to-Launch', value: '88% faster' },
      { label: 'Cost Reduction', value: '10x cheaper' },
      { label: 'Build Success', value: '99.4%' }
    ],
    typicalWorkflows: ['Full-stack SaaS scaffolding', 'Stripe checkout & webhook setup', 'PostgreSQL / Supabase schema creation', 'Automated product data synthesis']
  },
  {
    id: 'freelancers',
    role: 'Product Agencies & Consultancies',
    headline: 'Deliver 5x more client projects with identical headcount',
    description: 'Automate technical audits, bug fixes, site migrations, video captions, and report generation so senior partners can focus on winning high-value enterprise contracts.',
    impactMetrics: [
      { label: 'Project Turnover', value: '4.5x volume' },
      { label: 'Client Satisfaction', value: '99.1%' },
      { label: 'Margin Expansion', value: '+62%' }
    ],
    typicalWorkflows: ['Responsive client portal revamp', 'Figma to production React code', 'Competitive pricing data scraping', 'Social media video clip cutting']
  },
  {
    id: 'engineers',
    role: 'Engineering Teams & Tech Leads',
    headline: 'Eliminate boilerplate, legacy refactoring & flaky test suites',
    description: 'Offload routine burdens: authoring comprehensive unit test suites, upgrading deprecated dependencies, tracing flaky CI tests, and documenting complex microservices.',
    impactMetrics: [
      { label: 'PR Review Velocity', value: '3.2x faster' },
      { label: 'Test Coverage', value: '+45% avg' },
      { label: 'On-Call Fatigue', value: '-70%' }
    ],
    typicalWorkflows: ['Dependency bump & breaking change fix', 'End-to-end Playwright test suites', 'Profiling memory & CPU bottlenecks', 'Automated OpenAPI specification generation']
  },
  {
    id: 'researchers',
    role: 'Research Analysts & Strategy Teams',
    headline: 'Synthesize thousands of scientific disclosures into audited briefs',
    description: 'Deep multi-source web crawling, academic PDF parsing, factual cross-verification, and statistical chart plotting without manual copy-pasting.',
    impactMetrics: [
      { label: 'Reading Throughput', value: '150 papers/hr' },
      { label: 'Citation Accuracy', value: '99.8%' },
      { label: 'Synthesis Speed', value: '12x faster' }
    ],
    typicalWorkflows: ['Patent landscape mapping', 'Competitor feature audits', 'Financial SEC 10-K filing analysis', 'Automated dataset normalization']
  }
];
