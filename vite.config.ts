import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      api: `${path.resolve(__dirname, "./src/api/")}`,
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      constants: `${path.resolve(__dirname, "./src/constants/")}`,
      contexts: `${path.resolve(__dirname, "./src/contexts/")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
      pages: `${path.resolve(__dirname, "./src/pages/")}`,
      services: `${path.resolve(__dirname, "./src/services/")}`,
      styles: `${path.resolve(__dirname, "./src/styles/")}`,
      types: `${path.resolve(__dirname, "./src/types/")}`,
      utils: `${path.resolve(__dirname, "./src/utils/")}`,
    },
  },
});
