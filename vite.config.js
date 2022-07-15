import { resolve } from 'node:path';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: resolve('./src/components'),
			$meta: resolve('./src/meta.json'),
		}
	}
};

export default config;
