# brianvargas.dev

Personal site — portfolio, freelance services, and blog. Astro + Tailwind, static, no client framework.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Editing content

| What | Where |
|---|---|
| Name, tagline, email, socials, skills, services | `src/site.ts` |
| Projects | `src/content/projects/*.md` |
| Blog posts | `src/content/blog/*.md` (set `draft: true` to hide in prod) |
| About page bio | `src/pages/about.astro` |
| Résumé | `public/resume.pdf` |

## Deploy (Cloudflare Pages)

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick this repo.
2. Framework preset **Astro**; build command `npm run build`; output directory `dist`.
3. Set env var `NODE_VERSION=22`.
4. Custom domains → add `brianvargas.dev` (and `www.brianvargas.dev`, redirecting to apex).
   If the domain's DNS is on Cloudflare this is automatic; otherwise point the
   registrar's nameservers at Cloudflare or add the CNAME it shows you.
5. Every push to `main` redeploys.

## Email

The site links to `hello@brianvargas.dev`. To receive it for free, enable
**Cloudflare Email Routing** on the domain and forward it to your personal inbox.
