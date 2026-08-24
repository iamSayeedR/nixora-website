// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nixora.co.in',
  integrations: [sitemap()],
  redirects: {
    '/founder': '/about',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});