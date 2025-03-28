import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { imagetools } from "vite-imagetools";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  base: "/Bored-Ape-Yacht-Club/",
  plugins: [
    react(),
    imagetools({
      defaultDirectives: () => new URLSearchParams({
        format: "webp", 
        quality: "80",   
      }),
    }),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      // threshold: 1024
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  build: {
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          player: ['react-player'],
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // build: {
  //   outDir: "dist",
  // },
  // publicDir: false,
});
