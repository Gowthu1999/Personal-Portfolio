import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Ensure proper handling of static assets
  publicDir: 'public',
  build: {
    // Copy public folder contents to dist root
    copyPublicDir: true,
  },
});
