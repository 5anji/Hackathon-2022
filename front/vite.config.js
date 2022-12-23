import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [vue()],
  server: {
    force: true,
    host: true,
    proxy: {
      '/api': {
        changeOrigin: true,
        secure: false,
        target: 'http://192.168.253.208:8080',
        timeout: 6000,
      }
    }
  }
})
