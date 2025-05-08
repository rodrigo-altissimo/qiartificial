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
  // Add configuration to handle HTML proxy files with multiple query parameters
  assetsInclude: [
    '**/*.js&v=*',
    '**/*.html?html-proxy&index=0.js*'
  ]
}));
