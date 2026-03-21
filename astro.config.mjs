import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
export default defineConfig({
  site: 'https://giorgosgiannakoudakis.com',
  integrations: [
    mdx(),
    tailwind(),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
