import type { Status } from './types';

export type DiagramId = 'digital-twin' | 'gha-optimizer' | 'carechain';

export interface Screenshot {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  /** Long form title, shown on the detail page when it differs from `title`. */
  fullTitle?: string;
  status: Status;
  /** Short code or date for the record column. */
  record: string;
  context: string;
  /** One paragraph for the home page row. */
  summary: string;
  /** Detail page overview paragraphs. Falls back to `summary`. */
  overview?: string[];
  /** Named parts of the system, shown on the detail page. */
  modules?: { name: string; text: string }[];
  contributions?: string[];
  /** Plain list for coursework entries without a detail page. */
  items?: string[];
  stack: string[];
  repo?: string;
  /** "What is not yet known or measured". Omit when there is nothing to say. */
  unknowns?: string;
  diagram?: DiagramId;
  /** Generates /projects/[slug] when true. */
  hasPage: boolean;
  /** Optional. None exist yet; nothing renders while empty. */
  screenshots?: Screenshot[];
}

export const projects: Project[] = [
  {
    slug: 'agentic-digital-twin',
    title: 'Agentic Digital Twin',
    status: { label: 'Developed', kind: 'done' },
    record: 'BCSE301P',
    context: 'Software project, also built as the BCSE301P Software Engineering Lab project',
    summary:
      "An agent-based system that acts as a user's digital counterpart for the services they pay for. Specialised agents analyse usage, negotiate service options, switch plans, mediate privacy and log every decision.",
    modules: [
      { name: 'Usage Analyzer', text: 'Usage patterns and user needs.' },
      { name: 'Negotiation Agent', text: 'Decision logic for negotiating service options.' },
      { name: 'Plan Switching', text: 'Moves the user between service plans.' },
      { name: 'Privacy Mediator', text: 'Privacy decisions and controls.' },
      { name: 'Audit Logger', text: 'Record of activity and decisions.' },
      { name: 'Web Dashboard', text: 'Interface to the system.' },
    ],
    contributions: [
      'Designed the backend architecture and the idea of connecting specialised agents through a common system.',
      'Built the agent modules, API routes, service layer, database models and Pydantic schemas.',
      'Handled local execution and troubleshooting.',
      'Wrote the full software design documentation for the lab, covering all twelve required UML and design sections.',
    ],
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'REST APIs', 'Web dashboard'],
    repo: 'https://github.com/akshat-singh05/digital-agentic-twin',
    unknowns:
      'The system has not been deployed, and I have not published results or performance metrics for it.',
    diagram: 'digital-twin',
    hasPage: true,
    screenshots: [],
  },
  {
    slug: 'github-actions-optimizer',
    title: 'Intelligent GitHub Actions Optimizer',
    fullTitle:
      'Intelligent GitHub Actions Optimizer Using Graph-Based Machine Learning for Predictive CI/CD Pipeline Scheduling',
    status: { label: 'In progress', kind: 'progress' },
    record: 'BCSE497J',
    context: 'BCSE497J Project I, semester project built as a team',
    summary:
      'Improves GitHub Actions pipelines by analysing workflow dependencies, finding bottlenecks and predicting execution behaviour, then scheduling jobs to cut run time and use resources better.',
    modules: [
      { name: 'Collect', text: 'Collect repository and workflow information.' },
      { name: 'Dependency graph', text: 'Build dependency graphs of workflow jobs.' },
      { name: 'Feature extraction', text: 'Extract features such as execution time, failures and cache misses.' },
      { name: 'Prediction', text: 'Predict job behaviour with machine learning.' },
      { name: 'Scheduling', text: 'Schedule jobs with a DAG-based scheduler.' },
      { name: 'Workflow output', text: 'Generate an optimised GitHub Actions YAML workflow.' },
      { name: 'Feedback', text: 'Feed execution results back into the model.' },
    ],
    contributions: [
      'Worked on the optimisation pipeline as a team member.',
      'Worked on the validation of the pipeline.',
      'Worked on the graph-based and predictive parts.',
    ],
    stack: ['Python', 'Machine learning', 'Dependency graphs', 'GitHub Actions', 'CI/CD'],
    unknowns:
      'Measured results are still being collected. No reduction in run time, minutes saved, cache hit rate or cost saving has been measured yet. The architecture diagram shows the proposed design.',
    diagram: 'gha-optimizer',
    hasPage: true,
    screenshots: [],
  },
  {
    slug: 'carechain',
    title: 'CareChain',
    fullTitle: 'CareChain: Decentralized Healthcare Information Exchange',
    status: { label: 'Presented', kind: 'done' },
    record: 'BCSE329P',
    context: 'BCSE329P / BCSE329L, Blockchain and Distributed Ledger Technology Lab',
    summary:
      'A platform where patients control who can read their records. A permissioned blockchain holds consent and access decisions through smart contracts. The records stay encrypted off-chain and are referenced by cryptographic hash.',
    modules: [
      { name: 'Permissioned blockchain', text: 'Holds consent and access decisions.' },
      { name: 'Smart contracts', text: 'Encode the consent and access decisions.' },
      { name: 'Cryptographic hashes', text: 'Reference each off-chain record from the chain.' },
      { name: 'Encrypted off-chain storage', text: 'Holds the records themselves.' },
      { name: 'React frontend', text: 'The web interface.' },
      { name: 'Node.js and Express backend', text: 'The server side of the platform.' },
    ],
    contributions: [
      'Worked on the project as part of a three-person team.',
      'Built the 20-slide presentation deck covering architecture, smart contracts, patient consent models, security and regulatory compliance.',
    ],
    stack: ['React', 'Node.js', 'Express', 'Smart contracts', 'Permissioned blockchain'],
    repo: 'https://github.com/akshat-singh05/carechain',
    unknowns: 'The accompanying paper is a draft and has not been published.',
    diagram: 'carechain',
    hasPage: true,
    screenshots: [],
  },
  {
    slug: 'finlatics-data-science',
    title: 'Data Science Project (Finlatics)',
    status: { label: 'Completed', kind: 'done' },
    record: 'May–Jul 2025',
    context: 'Finlatics Data Science Work Experience Program, May to July 2025',
    summary:
      'End-to-end analysis of raw datasets: understanding and cleaning data, exploratory analysis, feature engineering, predictive models and visualisations that communicate findings.',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    repo: 'https://github.com/akshat-singh05/finlatics-py',
    hasPage: false,
  },
  {
    slug: 'pki-ai-agents',
    title: 'Securing AI Agents Using Public Key Infrastructure',
    status: { label: 'Presentation done', kind: 'done' },
    record: 'BCSE330L',
    context: 'BCSE330L',
    summary:
      'A trust framework giving autonomous AI agents verifiable identities, using digital certificates, cryptographic authentication and digital signatures so other systems can check who an agent is. I developed the technical concept and prepared the presentation. A conference paper and a basic working implementation are planned.',
    stack: ['PKI', 'Digital certificates', 'Digital signatures'],
    hasPage: false,
  },
  {
    slug: 'blockchain-labs',
    title: 'Blockchain programming labs',
    status: { label: 'Labs', kind: 'done' },
    record: 'Coursework',
    context: 'Coursework',
    summary: 'Coursework labs in blockchain programming.',
    items: [
      'A blockchain in Python',
      'Smart contracts in Solidity with Remix',
      'Bitcoin mining in Rust',
      'A private Ethereum network with Geth',
    ],
    stack: ['Python', 'Solidity', 'Remix', 'Rust', 'Geth'],
    hasPage: false,
  },
];
