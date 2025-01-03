// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

// https://astro.build/config
export default defineConfig({
	site: 'https://ahmadov.tech',
	integrations: [
		mdx({
			remarkPlugins: [remarkMath],
			rehypePlugins: [[rehypeKatex, {
				// KaTeX options
				strict: false,
				macros: {
					"\\bmatrix": "\\begin{bmatrix}#1\\end{bmatrix}",
				}
			}]]
		}), 
		sitemap(), 
		react(), 
		tailwind()
	],
	base:'/'
});
