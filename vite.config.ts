import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: "/Bored-Ape-Yacht-Club/",
  plugins: [react()],
  build: { sourcemap: true },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // build: {
  //   outDir: "dist",
  // },
  // publicDir: false,
})
