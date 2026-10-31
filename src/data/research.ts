import type { Status } from './types';

export interface Paper {
  title: string;
  /** Course code or kind of work, for the record column. */
  record: string;
  status: Status;
  context?: string;
  summary: string;
  tags?: string[];
  /** Slug of a related project page. */
  projectSlug?: string;
}

export const researchNote = 'None of these are published yet.';

export const papers: Paper[] = [
  {
    title: 'Post-Quantum Resilient Hybrid Consensus for Distributed Ledgers',
    record: 'BCSE328L',
    status: { label: 'IEEE format (course paper)', kind: 'progress' },
    context: 'BCSE328L Cryptocurrency Technologies, Fall 2026-27',
    summary:
      'Proposes QuantumSafe-BFT, a Byzantine fault tolerant protocol where validators sign with both a classical and a post-quantum scheme, with an adaptive fallback that limits the performance cost of moving to post-quantum cryptography. It targets two gaps: validator authentication that quantum computers could break, and the overhead of naive migration.',
    tags: ['Post-quantum cryptography', 'BFT consensus', 'Resource-constrained networks'],
  },
  {
    title: 'CareChain: A Layered, Consent-Aware Architecture for Decentralized Healthcare Information Exchange',
    record: 'Paper',
    status: { label: 'Draft', kind: 'progress' },
    context: 'Co-authored with Sivaranjani A., Assistant Professor Sr. Grade 1, VIT SCOPE',
    summary:
      'Separates consent, access control and storage into layers so patient consent is enforced by the system.',
    projectSlug: 'carechain',
  },
  {
    title: 'Intelligent GitHub Actions Optimizer: Project I report',
    record: 'BCSE497J',
    status: { label: 'Report', kind: 'progress' },
    context: 'BCSE497J',
    summary:
      'Covers graph-based workflow modelling and predictive machine learning for CI/CD optimisation.',
    projectSlug: 'github-actions-optimizer',
  },
  {
    title: 'Autonomous Error Correction in LLMs Using Vector-Based Memory',
    record: 'Concept',
    status: { label: 'Concept', kind: 'planned' },
    summary:
      'Asks whether a language model can make fewer repeated mistakes if it stores useful information from earlier interactions in a vector memory and retrieves it later. Not implemented or submitted.',
  },
  {
    title: 'CardioSense AI: A Hypertension Digital Twin',
    record: 'Concept',
    status: { label: 'Concept (documentation)', kind: 'planned' },
    summary:
      'An AI-supported digital representation of a patient for cardiovascular health and hypertension. Methodology, datasets and results are not finalised.',
  },
  {
    title: 'Blockchain: Hype or Help? (Case Study 7)',
    record: 'Study',
    status: { label: 'Team study', kind: 'done' },
    summary:
      'Separates blockchain myths from what the technology delivers in practice, with every claim traced to a source.',
  },
];
