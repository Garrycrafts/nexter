const autoprefixer = require("autoprefixer");

module.exports = {
  map: true,
  plugins: [
    autoprefixer(),
    // ❌ remove cssnano or any minifier here
  ],
};
