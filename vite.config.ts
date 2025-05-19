import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Removido componentTagger temporariamente para evitar conflitos no build

export default defineConfig(({ mode }) => ({
  // Base relativa para funcionar corretamente em produção (Vercel ou GitHub Pages)
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

  plugins: [
    react(),
    // Desabilite temporariamente o componentTagger em produção para evitar conflitos
    // mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },

  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"]
  },

  build: {
    // Garante que todos os arquivos estáticos sejam tratados corretamente
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
          ui: ["@radix-ui/react-*"]
        },
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]"
      }
    }
  }
}));
