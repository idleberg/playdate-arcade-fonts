import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		includePaths: ['node_modules', 'src']
	}),

	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.env.GITHUB_WORKFLOW ? '/playdate-arcade-fonts' : undefined,
		}
	}
};

export default config;
