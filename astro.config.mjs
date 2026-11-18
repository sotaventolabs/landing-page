// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Emit all CSS and JS as external files so the CSP (vercel.json) can stay
	// strict: no 'unsafe-inline' for script-src or style-src.
	build: {
		inlineStylesheets: 'never',
	},
	vite: {
		build: {
			assetsInlineLimit: 0,
		},
	},
});
