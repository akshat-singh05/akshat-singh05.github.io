# Akshat Singh · portfolio

Static personal site built with Astro, TypeScript and plain CSS. No client framework, no tracking.

## Run locally

Requires Node 18.20+ (Node 22 recommended).

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # output in dist/
npm run preview    # serve dist/ locally
npm run check      # type-check .astro and .ts files
```

## Editing content

All content lives in `src/data/`:

| File | Holds |
| --- | --- |
| `profile.ts` | Name, headline, intro, interests, links |
| `projects.ts` | Projects. `hasPage: true` generates `/projects/<slug>/` |
| `research.ts` | Papers and the "not published" note |
| `experience.ts` | Jobs |
| `skills.ts` | Skill groups (each group becomes a filter chip) |

Adding a project means adding one entry to `projects.ts`. Status labels use `{ label, kind }`. The label is the exact text shown, and `kind` (`done`, `progress` or `planned`) picks the dot colour.

Screenshots: add `{ src: '/images/x.png', alt: '...' }` to a project's `screenshots` array and put the file in `public/images/`. Nothing renders while the array is empty.

Diagrams are inline SVG components in `src/components/diagrams/`, coloured with the CSS tokens so they follow the theme.

## Resume

Put the file at `public/resume.pdf`. The build checks for it and only then shows the Resume links.

## Site URL

Canonical URLs, Open Graph tags, the sitemap and `robots.txt` use `SITE_URL`. Set it in the environment or edit the default in `astro.config.mjs`. If the site is served from a sub-path (e.g. `user.github.io/portfolio`), also set `BASE_PATH=/portfolio`.

## Deploy

### GitHub Pages (workflow included)

1. Create a repository named `akshat-singh05.github.io` and push this project to `main`.
2. In the repository, open Settings → Pages and set Source to "GitHub Actions".
3. Each push to `main` runs `.github/workflows/deploy.yml` and publishes to `https://akshat-singh05.github.io`.

Using a different repository name? Edit `BASE_PATH` in the workflow to `/<repo-name>`.

### Vercel

1. Import the repository at vercel.com/new. Vercel detects Astro (build `npm run build`, output `dist`).
2. Add an environment variable `SITE_URL` with the final address, e.g. `https://akshat-singh.vercel.app`.
3. Leave `BASE_PATH` unset.
