import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
    open: true,
    headers: { 'Cache-Control': 'no-store' },
    watch: { usePolling: true, interval: 100 },
    proxy: {
      '/api': 'http://localhost:3001'
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    // Force included packages to ensure they're pre-bundled properly
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  build: {
    assetsInlineLimit: 0,
    sourcemap: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  // Add configuration to handle HTML proxy files with multiple query parameters
  assetsInclude: [
    '**/*.js&v=*',
    '**/*.html?html-proxy&index=0.js*'
  ]
}));
