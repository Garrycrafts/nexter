import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass/base" as *;`,
        includePaths: ["nexter"],
      },
    },
  },
  build: {
    minify: "esbuild",
  },
});
