// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	site: 'https://ahmadov.tech',
	integrations: [mdx(), sitemap(), react(), tailwind()],
	base:'/'
});
