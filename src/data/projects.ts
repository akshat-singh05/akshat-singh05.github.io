import type { Status } from './types';

export type DiagramId = 'digital-twin' | 'gha-optimizer' | 'carechain' | 'pki';

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
  /** Measured results, each traceable to the project's repository. */
  results?: string[];
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
    status: { label: 'Research prototype', kind: 'done' },
    record: 'BCSE329P',
    context: 'BCSE329P / BCSE329L, Blockchain and Distributed Ledger Technology Lab',
    summary:
      'A research prototype where patients decide who may read their health records, for how long and for what purpose. Records are encrypted off-chain. The blockchain stores only hashes, pointers and Merkle roots, and keeps an audit trail of every access, including emergency break-glass access.',
    overview: [
      'A research prototype where patients decide who may read their health records, for how long and for what purpose. Records are encrypted with AES-256-GCM and stored off-chain. The blockchain stores only hashes, pointers and Merkle roots, and keeps an append-only audit trail of every access.',
      'Consent is attribute-based: a patient grants a provider access for a time window, a stated purpose and a record scope, and the smart contract checks all three on every access. Emergency responders can override consent through break-glass access, which requires a reason, writes a flagged audit entry, notifies the patient and is rate-limited per responder. On every read the stored content is re-hashed and compared with the anchored hash, so tampered content is rejected.',
    ],
    modules: [
      { name: 'CareChainRegistry', text: 'Identities and roles: patient, provider, emergency responder, auditor, admin.' },
      { name: 'ConsentManager', text: 'Grants, revokes and checks consent, and logs every access decision.' },
      { name: 'RecordAnchor', text: 'Anchors single record hashes or Merkle batches and verifies inclusion proofs.' },
      { name: 'EmergencyAccess', text: 'Break-glass access with a mandatory reason, rate limit and notification flag.' },
      { name: 'AuditLog', text: 'Append-only trail, written only by authorised contracts.' },
      { name: 'Express API', text: 'Role-based sign-in, record encryption and contract calls.' },
      { name: 'React front end', text: 'The interface for all five roles.' },
    ],
    contributions: [
      'Worked on the project as part of a three-person team.',
      'Built the 20-slide presentation deck covering architecture, smart contracts, patient consent models, security and regulatory compliance.',
    ],
    results: [
      'Merkle-batched anchoring cuts the gas cost per record by roughly 62× at a batch size of 50.',
      '29 smart-contract tests, including negative cases, and 44 end-to-end checks across all five roles.',
      'Benchmarks for anchoring cost, consent-check cost, encryption overhead, latency, throughput and concurrency, with scripts and raw results in the repository.',
    ],
    stack: ['Solidity', 'OpenZeppelin', 'Hardhat', 'Node.js', 'Express', 'ethers.js', 'React', 'Vite', 'AES-256-GCM'],
    repo: 'https://github.com/akshat-singh05/carechain',
    unknowns:
      'The prototype runs on a local single-node Hardhat chain, not a permissioned production network. The backend holds the record encryption keys, and all data is synthetic. The accompanying paper is a draft and has not been published.',
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
    status: { label: 'Course prototype', kind: 'done' },
    record: 'BCSE330L',
    context: 'BCSE330L Public Key Infrastructure and Trust Management',
    summary:
      'A trust framework that gives autonomous AI agents verifiable identities. Each agent gets an X.509 certificate from a two-level certificate authority, talks to its peers over mutual TLS 1.3, signs every request, and is checked by a verification gateway before any work is done.',
    overview: [
      'A trust framework that gives autonomous AI agents verifiable identities, so other systems can check who an agent is before acting on its requests. Each agent gets an X.509 certificate from a two-level certificate authority, talks to its peers over mutual TLS 1.3 and signs every request and reply.',
      'A verification gateway checks the certificate chain, revocation status, identity, signature, freshness and replay before any work is done. Revocation works in three layers: signed notices pushed by the CA, a short-lived OCSP answer stapled to every request, and a CRL as the fallback. Two organisations can trust each other by exchanging only their root certificates. A web console drives the system and includes an attack lab.',
    ],
    modules: [
      { name: 'Certificate authority', text: 'Offline root, issuing CA and short-lived agent certificates (ECDSA P-256).' },
      { name: 'Registration Authority', text: 'Enrolment token, proof of possession through a CSR, and a namespace pinned per CA.' },
      { name: 'Agents', text: 'Keep their key in a file or a PKCS#11 token, and renew certificates automatically.' },
      { name: 'Verification Gateway', text: 'Ten ordered checks that fail closed, with a chain cache.' },
      { name: 'Revocation', text: 'CA-signed push notices, stapled OCSP and CRL.' },
      { name: 'Federation', text: 'A second organisation trusted through exchanged roots, limited by namespace.' },
      { name: 'Web console', text: 'Send signed requests, run eight attacks, revoke agents and read audit logs.' },
    ],
    contributions: ['Developed the technical concept.', 'Prepared the presentation.'],
    results: [
      'ECDSA P-256 with session resumption made the mutual-TLS handshake 65% faster than a full RSA-2048 handshake (range 57–75%, one laptop over loopback).',
      'A revoked agent is rejected by a peer a median 104 ms after the revoke call (loopback).',
      'A stapled OCSP answer stays about 316 bytes, while a CRL grows to 530 KB at 10,000 revocations.',
      '54 tests pass on Windows 11, and 59 including five HSM tests on Debian in Docker.',
    ],
    stack: ['Python', 'X.509', 'ECDSA P-256', 'Mutual TLS 1.3', 'OCSP', 'CRL', 'PKCS#11', 'SQLite', 'Docker'],
    unknowns:
      'Everything was tested on one physical machine. The network test used containers on a virtual network with emulated delay, not a wide-area path. Key storage in a token was tested only against SoftHSM2, a software token. A conference paper is planned.',
    diagram: 'pki',
    hasPage: true,
    screenshots: [],
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
