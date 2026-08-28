import { defineConfig } from 'astro/config';
import supersvgPlugin from 'vite-plugin-supersvg';
//
export default defineConfig({
  site: 'https://www.landaetadev.com',
  base: '/',
  vite: {
    plugins: [
      supersvgPlugin({
      srcDir: 'src/svgicons/',        // Carpeta de ficheros SVG
      destDir: 'public/assets/icons/',       // Carpeta de sprites finales
      config: {                       // Configuración de svg-sprite
        shape: {
          spacing: { padding: 2 },
        },
      },
      lazy: true                // Sólo genera cuando ocurren cambios
    })
    ]
  },
});
