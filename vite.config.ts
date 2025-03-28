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
    imagetools(),
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
  build: { sourcemap: true },
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
