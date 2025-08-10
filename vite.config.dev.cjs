const { defineConfig } = require("vite");

module.exports = defineConfig({
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@use "base" as *;` },
      includePaths: ["sass"],
    },
  },
  build: {
    minify: false,
  },
});
