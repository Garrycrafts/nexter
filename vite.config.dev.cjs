const { defineConfig } = require("vite");

module.exports = defineConfig({
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  build: {
    minify: false,
  },
});
