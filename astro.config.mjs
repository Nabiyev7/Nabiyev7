// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages: the workflow sets SITE_URL and BASE_PATH (e.g. /Nabiyev7).
// For a custom domain, set BASE_PATH to "/".
export default defineConfig({
  site: process.env.SITE_URL || 'https://nabiyev7.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
});
