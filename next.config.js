const withSass = require("@zeit/next-sass");
const withMDX = require("@next/mdx")();

module.exports = withSass(withMDX({
  pageExtensions: ["js", "mdx"],
  cssModules: true,
  experimental: {
    publicDirectory: true,
  },
}));
