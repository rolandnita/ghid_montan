// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://rolandnita.github.io',
  base: '/ghid_montan',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});