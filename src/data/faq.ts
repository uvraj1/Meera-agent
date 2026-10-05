export interface FAQItem {
  id: string;
  question: string;
  questionHi: string;
  answer: string;
  answerHi: string;
  category: 'deployment' | 'architecture' | 'privacy' | 'pricing';
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'github-pages',
    question: 'How does MEERA AGENT run on GitHub Pages without a backend server?',
    questionHi: 'GitHub Pages par bina backend ke MEERA website kaise chal sakti hai?',
    answer: 'GitHub Pages is a static host (HTML, CSS, JavaScript). The MEERA website is built as an ultra-fast static React SPA. The Interactive Playground runs in realistic client-side Simulation Mode where full multi-step reasoning, tool chains, terminal streams, and live UI outputs are rendered deterministically. When you are ready to connect MEERA to a real autonomous execution server (e.g. Render, Railway, AWS, or local VPS), you only need to update the single API_BASE_URL constant in src/config.ts without altering the frontend.',
    answerHi: 'GitHub Pages sirf static files host karta hai. Isliye ye website bina kisi server ke instant load hoti hai. Live Playground me JS simulation se agent ka poora kaam (thinking -> tool execution -> bash logs -> browser render) asli jaisa chalta hai. Baad me aap chahein to ek line me apna real backend URL connect kar sakte hain.',
    category: 'deployment'
  },
  {
    id: 'how-different',
    question: 'How is MEERA different from Devin, Devika, or standard ChatGPT?',
    questionHi: 'MEERA baaki AI tools jaise ChatGPT ya Devin se alag kaise hai?',
    answer: 'Traditional chatbots only generate text and stop when you ask them to run commands or build complete multi-file apps. MEERA is an autonomous agent with native tool execution: it plans architectures, executes shell commands, inspects browser DOMs, creates git commits, detects errors on its own, and self-corrects without pestering you with "Should I proceed?". Furthermore, MEERA includes native multimodal video editing and persistent cross-session memory.',
    answerHi: 'ChatGPT sirf text likhta hai. MEERA ek autonomous agent hai: ye files banata hai, terminal me commands run karta hai, build check karta hai, aur koi error aaye to khud theek karta hai bina aapse baar baar permission maange.',
    category: 'architecture'
  },
  {
    id: 'api-security',
    question: 'Are API keys and confidential credentials safe?',
    questionHi: 'Kya hamari API keys aur private code safe rehte hain?',
    answer: 'Yes. MEERA follows strict zero-leakage security. In static GitHub Pages deployment, never hardcode API keys into frontend code. Secrets are managed either via encrypted local environment files during local CLI runs or server-side proxies when running in enterprise mode.',
    answerHi: 'Haan. Frontend code me kabhi private keys mat daalo. MEERA local sandbox me kaam karta hai aur aapka data kisi teesre server par leak nahi hota.',
    category: 'privacy'
  },
  {
    id: 'self-correction-how',
    question: 'What happens when MEERA encounters a syntax error or failed test?',
    questionHi: 'Agar MEERA ke code me koi error aa jaye to kya hota hai?',
    answer: 'Unlike naive agents that crash or repeat the same broken command, MEERA activates an autonomous reflection loop. It pauses, parses the exact error stack trace or compiler diagnostic, inspects recent diffs, formulates an alternative hypothesis, rolls back broken changes, and tests the fix. In benchmarks, MEERA successfully self-heals 94.1% of failures on the first retry.',
    answerHi: 'MEERA rukta nahi hai. Wo error message ko read karta hai, pichle change ko inspect karta hai, nayi strategy banata hai aur khud fix karke dubara test run karta hai.',
    category: 'architecture'
  },
  {
    id: 'models-supported',
    question: 'Which AI foundation models power MEERA AGENT?',
    questionHi: 'MEERA ke peeche kaunse AI models kaam karte hain?',
    answer: 'MEERA uses a hybrid orchestration model: Google Gemini 2.5 Flash / Pro for rapid multimodal reasoning and code synthesis, paired with specialized local AST parsers and vision models for low-latency browser interaction.',
    answerHi: 'MEERA modern high-speed models (Gemini Pro/Flash) aur specialized code-parsing algorithms ko combine karke operate karta hai.',
    category: 'architecture'
  },
  {
    id: 'github-deploy-steps',
    question: 'Can I clone this repository and deploy it to my own GitHub Pages right now?',
    questionHi: 'Kya main is website ko clone karke apne GitHub Pages par daal sakta hu?',
    answer: 'Yes! Simply push this code to a GitHub repo, ensure the base path in vite.config.ts matches your repository name (or root for username.github.io), and enable GitHub Actions Pages deployment. We provide a ready-to-use .github/workflows/deploy.yml in the export guide.',
    answerHi: 'Bilkul! Aap GitHub par repo bana kar push kar sakte hain. GitHub Actions 1 minute me website ko live deploy kar dega.',
    category: 'deployment'
  }
];
