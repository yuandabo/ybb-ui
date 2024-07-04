// demo/vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'node:path'
console.log(join(__dirname, '..', 'package', '$1', 'src') );


export default defineConfig({
  plugins: [vue()],
  // resolve: {
  //   alias: [
  //     {
  //       find: /^@monitor\/(.+)$/, 
  //       replacement: join(__dirname, '..', 'package', '$1', 'src') 
  //     },
  //   ]
  // }
})
