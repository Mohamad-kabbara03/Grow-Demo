import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    devSourcemap: false, // Disable source maps for CSS
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/css/style.scss"; @import "@/assets/css/responsive.css";`,
      },
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
