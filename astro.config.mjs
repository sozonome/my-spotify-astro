import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { netlifyEdgeFunctions } from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  adapter: netlifyEdgeFunctions(),
  integrations: [react(), tailwind()],
});
