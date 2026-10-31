import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change SITE_URL to the deployed address, or set it in the environment.
// For a GitHub Pages project site (user.github.io/repo), also set BASE_PATH=/repo.
const SITE_URL = process.env.SITE_URL ?? 'https://example.com';
const BASE_PATH = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  integrations: [sitemap()],
  build: { format: 'directory' },
});
