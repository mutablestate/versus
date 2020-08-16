import svelte from 'vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

export default {
  plugins: [
    svelte({
      hydratable: true,
      preprocess: sveltePreprocess({
        postcss: true
      }),
    }),
  ],
  rollupDedupe: ['svelte']
};
