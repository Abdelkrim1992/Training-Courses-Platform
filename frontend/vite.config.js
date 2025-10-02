import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
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
  server: {
    proxy: {
      '/api': {
        target: 'https://training-courses-backend-6jkbrp.laravel.cloud/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
