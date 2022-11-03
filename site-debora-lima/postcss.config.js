const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    purgecss({
      content: [
        "./public/**/*.html, ./src/componentes/**/*.js, ./src/componentes/**/*.jsx",
      ],
    }),
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
