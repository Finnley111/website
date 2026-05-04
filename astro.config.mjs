import { defineConfig } from 'astro/config';
import tailwindv4 from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://finnleyhowald.com',
  base: '/',
  vite: {
    plugins: [tailwindv4()],
  },
  integrations: [react()],
});