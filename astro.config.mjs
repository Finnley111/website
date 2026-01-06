import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Finnley111.github.io', //
  base: '/', // Change to '/repo-name/' if not using a custom domain
  integrations: [tailwind()],
});