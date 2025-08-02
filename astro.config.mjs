import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Detect base path when building via GitHub Actions (Pages)
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isCI = !!process.env.GITHUB_ACTIONS;
const base = isCI && repoName ? `/${repoName}/` : '/';

// Update 'site' to your domain or GitHub Pages URL for better SEO.
export default defineConfig({
  site: 'https://your-domain.example',
  base,
  output: 'static',
  integrations: [tailwind()]
});