import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(
      {
        template: {
        transformAssetUrls: {
            base: null,
              includeAbsolute: false,
          },
        },
          'vue/dist/vue.esm.js': 'default',
      }
    ),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  publicDir: 'public'
})
