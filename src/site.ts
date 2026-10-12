// Single source of truth for personal details. Edit here, not in pages.
export const SITE = {
  url: 'https://brianvargas.dev',
  name: 'Brian Vargas',
  role: 'Business Analytics & ERP Systems',
  tagline: 'I build AI-powered tools and the systems that run them.',
  location: 'Miami, FL',
  email: 'hello@brianvargas.dev', // TODO: confirm this inbox exists (see README)
  available: true, // toggles the "open for work" badge
  socials: [
    { label: 'GitHub', href: 'https://github.com/BrianVargasSantos' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/brianvargassantos/' },
  ],
  skills: ['Infor M3 / WMS', 'Power BI', 'SQL', 'Forecasting', 'Data mapping', 'Shopify & integrations', 'Azure DevOps', 'Python', 'TypeScript', 'LLM agents'],
  services: [
    { title: 'ERP & integrations', body: 'Infor M3, WMS, Shopify, TMS, POS and 3PL: configured, connected, documented, and kept running for the people who depend on them.' },
    { title: 'Analytics & reporting', body: 'Dashboards, exception reports, and forecasts in Power BI and SQL that turn operational data into decisions.' },
    { title: 'AI & automation', body: 'LLM agents and scripts that take the repetitive work out of operations, built with guardrails that hold up in production.' },
  ],
  // Headline numbers from the résumé, shown on the home page.
  stats: [
    { value: '$145K+', label: 'cost savings from Lean Six Sigma work at Amazon' },
    { value: '10+', label: 'business clients migrated onto Infor M3, on schedule' },
    { value: '−25%', label: 'recurring support tickets after docs and training' },
    { value: '17K', label: 'orders a day at 99% accuracy' },
  ],
  experience: [
    { role: 'ERP Functional Analyst', org: 'Legends Global Merchandise', when: '2025 – now' },
    { role: 'ERP Data Specialist', org: 'Legends Global Merchandise', when: '2022 – 2024' },
    { role: 'Fulfillment Area Manager', org: 'Amazon', when: '2021 – 2022' },
    { role: 'Tech Group President', org: 'ALPFA at FIU', when: '2020 – 2021' },
    { role: 'Dual BBA, Business Analytics & Information Systems', org: 'Florida International University', when: '2021' },
  ],
};
