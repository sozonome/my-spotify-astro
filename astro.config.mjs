import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/edge';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [react(), tailwind()],
});
