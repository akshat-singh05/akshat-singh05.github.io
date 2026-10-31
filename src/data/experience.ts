export interface Job {
  role: string;
  org: string;
  team?: string;
  /** Short date range for the record column. */
  record: string;
  dates: string;
  location?: string;
  summary: string;
  items?: { name: string; text: string }[];
  credential?: string;
}

export const jobs: Job[] = [
  {
    role: 'IT Intern',
    org: 'Saxo Group India Private Limited (Saxo Bank)',
    team: 'Axiom team',
    record: 'May–Jul 2026',
    dates: '18 May to 10 July 2026, about eight weeks',
    location: 'Gurugram, Haryana',
    summary: 'Built internal tools so staff spend less time searching through documents.',
    items: [
      {
        name: 'Axiom SL AI chatbot',
        text: 'Answers natural-language questions about Axiom SL features, workflows, use cases and troubleshooting, using the Axiom SL documentation and user guides as its knowledge base. I built the application and prepared its documentation-based knowledge base.',
      },
      {
        name: 'LCR documentation portal',
        text: 'A web application for managing Liquidity Coverage Ratio documentation, where users retrieve documents and transaction-related information for a chosen month and year.',
      },
      {
        name: 'DataDock Excel interpreter',
        text: 'A tool for querying financial data in plain language.',
      },
    ],
  },
  {
    role: 'Data Science Trainee',
    org: 'Finlatics',
    record: 'May–Jul 2025',
    dates: 'May to July 2025',
    summary:
      'Completed the Data Science Work Experience Program. Analysed datasets in Python, cleaned and prepared data, ran exploratory analysis, engineered features, built predictive models with Scikit-learn and created visualisations.',
    credential: 'DS-9032421a6f6fde13',
  },
];
