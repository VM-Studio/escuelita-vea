// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Navegadores objetivo (soporte completo): Chrome/Edge 80+, Firefox 78+, Safari/iOS 13+.
const targets = ['chrome80', 'edge80', 'firefox78', 'safari13'];

export default defineConfig({
  site: 'https://laescuelitavea.org.ar',
  output: 'static',
  trailingSlash: 'ignore',
  compressHTML: true,
  scopedStyleStrategy: 'class', // las clases pasadas a componentes hijos reciben el estilo del padre
  build: { format: 'directory', inlineStylesheets: 'always' /* CSS incrustado: sin recursos que bloqueen el render */ },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  devToolbar: { enabled: false },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Calidad por formato (no se pasa `quality` en los componentes para que esto aplique)
        // Rev. 25-11-2026: más calidad (en el celular las fotos se veían blandas y oscuras)
        jpeg: { quality: 85, mozjpeg: true },
        webp: { quality: 84, effort: 5 },
        avif: { quality: 64, effort: 4, chromaSubsampling: '4:4:4' },
      },
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/guia') && !page.includes('/404'),
      i18n: undefined,
    }),
  ],
  vite: {
    build: { target: targets, cssTarget: targets, assetsInlineLimit: 2048 },
  },
});
