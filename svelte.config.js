import adapter from "@sveltejs/adapter-static";
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
    adapter: adapter({
      
      pages:'build',
      assets:'build',
      precompress:false,
      fallback:null
    }),

    vite:{
      resolve:{
        alias:{
          '$assets':resolve('./src/assets')
        }
      }
    }
  }
};

export default config;
