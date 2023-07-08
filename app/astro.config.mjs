import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://music-gram-yefreescoding.vercel.app',
  integrations: [sitemap(), tailwind(), react()]
});