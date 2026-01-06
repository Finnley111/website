import { defineConfig } from 'astro/config';
import tailwindv4 from '@tailwindcss/vite'; // Use the v4 vite plugin
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://finnley111.github.io',
  base: '/',
  vite: {
    plugins: [tailwindv4()], // Plugin goes here for v4
  },
  integrations: [react()], // Remove tailwind() from here
});