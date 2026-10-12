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
    { title: 'AI integrations', body: 'Wire LLMs into real products — agents, tool use, evals, and guardrails that hold up in production.' },
    { title: 'Web apps & dashboards', body: 'Fast, accessible front-ends and the APIs behind them, from prototype to launch.' },
    { title: 'Automation & tooling', body: 'CLIs, pipelines, and internal tools that remove the busywork from your team.' },
  ],
};
