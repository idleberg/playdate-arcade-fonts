import { resolve } from 'node:path';
import { sveltekit } from '@sveltejs/kit/vite';
import mkcert from 'vite-plugin-mkcert';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [mkcert(), sveltekit()],
	resolve: {
		alias: {
			$components: resolve('./src/components'),
			$meta: resolve('./src/meta.json'),
		}
	}
};

export default config;
