import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "base" as *;`,
        includePaths: ["sass"],
      },
    },
  },
  build: {
    minify: "esbuild",
  },
});
