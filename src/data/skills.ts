export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { id: 'languages', label: 'Languages', items: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'Solidity', 'Rust'] },
  {
    id: 'backend',
    label: 'Backend and web',
    items: ['FastAPI', 'Flask', 'Streamlit', 'React', 'SQLAlchemy', 'Pydantic', 'REST APIs'],
  },
  {
    id: 'ai',
    label: 'AI and ML',
    items: ['Generative AI', 'Agentic AI', 'LLMs', 'Chatbots', 'Vector memory', 'Gemini API', 'Scikit-learn'],
  },
  {
    id: 'data',
    label: 'Data',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'EDA', 'Feature engineering', 'Predictive modelling', 'SQL'],
  },
  {
    id: 'blockchain',
    label: 'Blockchain',
    items: ['Ethereum', 'Bitcoin', 'Smart contracts', 'Remix', 'Geth', 'Private networks', 'Distributed ledgers'],
  },
  {
    id: 'security',
    label: 'Security',
    items: ['PKI', 'Digital certificates', 'Digital signatures', 'RSA', 'AES', 'DES', 'RC4'],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'VS Code', 'Google Colab', 'StarUML'],
  },
];
