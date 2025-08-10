const { defineConfig } = require("vite");

module.exports = defineConfig({
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@use "@/sass/base/base" as *;` },
    },
  },
  build: {
    minify: false,
  },
});
