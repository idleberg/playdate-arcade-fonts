import { resolve } from 'node:path';
import { sveltekit } from '@sveltejs/kit/vite';
import * as v from 'valibot';
import mkcert from 'vite-plugin-mkcert';
import valibot from 'vite-plugin-valibot-env';

const schema = v.object({
  VITE_HOMEPAGE: v.pipe(v.string(), v.url()),
  BUILD_ENV: v.optional(
    v.union([
      v.literal('github'),
      v.literal('netlify'),
    ])
  ),
});

/** @type {import('vite').UserConfig} */
const config = {
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

export default config;
