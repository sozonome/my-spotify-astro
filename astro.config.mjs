import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [react(), tailwind()],
});
