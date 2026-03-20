import { defineConfig } from 'astro/config';

// Detecta si estamos desplegando a GH Pages
const isGH = process.env.DEPLOY_ENV === 'GH_PAGES';

export default defineConfig({
  // URL usada en meta tags, RSS, etc.
  site: isGH
    ? 'https://landaetadev.github.io'
    : 'https://www.landaetadev.com',

  // Ruta base para todos los assets (CSS, JS, imágenes)
  base: '/',

  // Configuración de Vite para builds modernos
  vite: {
    build: {
      target: 'esnext',
    },
  },
});