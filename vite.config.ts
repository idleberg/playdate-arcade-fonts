import { defineConfig, loadEnv } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import * as v from 'valibot';
import devcert from '@idleberg/vite-plugin-devcert';
import valibot from 'vite-plugin-valibot-env';

const schema = v.object({
  VITE_HOMEPAGE: v.pipe(v.string(), v.url()),
});

export default defineConfig(({ mode }) => {
  loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      devcert(),
      valibot(schema, {
        ignoreEnvPrefix: true,
        transformValues: true,
      }),
      sveltekit()
    ],
  };
});
