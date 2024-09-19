import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://javihll.github.io/portfolio-javi-h/',
  integrations: [sitemap()],
  output: 'static',
  base: '/portfolio-javi-h/', // El nombre de tu repositorio en GitHub
  vite: {
    alias: {
      '@': '/src',
    },
  },
});


