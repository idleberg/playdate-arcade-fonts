import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'node:path';
import { sveltekit } from '@sveltejs/kit/vite';
import * as v from 'valibot';
import mkcert from 'vite-plugin-mkcert';
import valibot from 'vite-plugin-valibot-env';

const schema = v.object({
  VITE_HOMEPAGE: v.pipe(v.string(), v.url()),
});

export default defineConfig(({ mode }) => {
  loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      mkcert(),
      valibot(schema, {
        ignoreEnvPrefix: true,
        transformValues: true,
      }),
      sveltekit()
    ],
    resolve: {
      alias: {
        $components: resolve('./src/components'),
        $meta: resolve('./src/meta.json'),
      }
    }
  };
});
