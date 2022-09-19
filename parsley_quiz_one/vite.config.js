import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [svelte()]
// })


// use svelte plugin and export the js file with the name of index.js
export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'index'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['svelte'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          svelte: 'Svelte'
        }
      }
    }
  }
})


