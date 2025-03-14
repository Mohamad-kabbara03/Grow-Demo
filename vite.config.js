import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
      'assets': '/src/assets'
    },
  },
  css: {
    devSourcemap: false, 
    preprocessorOptions: {
    },
  },
  optimizeDeps: {
    include: ["jquery", "owl.carousel"],
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    cors: true,
  }
});
