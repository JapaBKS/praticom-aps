import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separa as dependências node_modules num ficheiro 'vendor.js'
          // Garante a compactação e o reuso de cache para as várias views da LPS
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
});