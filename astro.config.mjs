import { defineConfig } from 'astro/config';
import tailwindv4 from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://finnley111.github.io',
  base: '/',
  vite: {
    plugins: [tailwindv4()],
  },
  integrations: [react()],
});