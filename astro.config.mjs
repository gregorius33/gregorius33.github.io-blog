import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: process.env.SITE || 'https://gregorius33.github.io',
  base: process.env.BASE || '/gregorius33.github.io-blog/',
  integrations: [tailwind()],
});
