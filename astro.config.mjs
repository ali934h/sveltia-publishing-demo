import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ali934h.github.io',
  base: '/sveltia-publishing-demo',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
});
