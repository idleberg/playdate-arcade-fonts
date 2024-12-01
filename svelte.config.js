import auto from '@sveltejs/adapter-auto';
import ghPages from '@sveltejs/adapter-static';
import netlify from '@sveltejs/adapter-netlify';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		includePaths: ['node_modules', 'src']
	}),

	kit: {
		adapter: getAdapter(),
		paths: {
			base: process.env.GITHUB_WORKFLOW ? '/playdate-arcade-fonts' : undefined,
		}
	}
};

function getAdapter() {
  switch(process.env.BUILD_ENV) {
    case 'github':
      return ghPages({
        fallback: '404.html',
        precompress: true,
      });

    case 'netlify':
      return netlify({
        edge: true,
      });

    default:
      return auto();
  }
}

export default config;
