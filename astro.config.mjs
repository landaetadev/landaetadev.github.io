import { defineConfig } from 'astro/config';

const isGH = process.env.DEPLOY_ENV === 'GH_PAGES';

export default defineConfig({
  site: isGH
    ? 'https://landaetadev.github.io'
    : 'https://www.landaetadev.com',
  base: '/',
  build: {
    // Forzar que los assets sean relativos
    assetsPrefix: './',
    inlineStyles: 'auto',
  },
  vite: {
    build: {
      target: 'esnext',
    },
  },
});