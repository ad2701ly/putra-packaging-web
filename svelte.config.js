import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import {resolve} from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter({}),

    vite:{
      resolve:{
        alias:{
          '$assets':resolve('./src/assets'),
          '$components':resolve('./src/components','./src/routes/.components')
        }
      }
    }
  }
};

export default config;
