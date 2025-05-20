import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  // Paths relativos em produção
  base: "./",

  server: {
    host: "::",
    port: 8080,
    strictPort: true,
    open: true,
    headers: { "Cache-Control": "no-store" },
    watch: { usePolling: true, interval: 100 },
    proxy: {
      "/api": "http://localhost:3001"
    }
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": "/src"
    }
  },

  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"]
  },

  build: {
    assetsInlineLimit: 0,
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug", "console.warn"]
      },
      mangle: {
        safari10: true,
        keep_fnames: true
      },
      format: {
        comments: false,
        beautify: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-popover",
            // ...outros que você usa
          ]
        },
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]"
      }
    }
  }
}));
