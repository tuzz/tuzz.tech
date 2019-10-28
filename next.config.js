const withSass = require("@zeit/next-sass");
const withMDX = require("@next/mdx")();

module.exports = withSass(withMDX({
  pageExtensions: ["js", "mdx"],
  cssModules: true,
  experimental: {
    publicDirectory: true,
  },
  webpack (config, options) {
    config.module.rules.push({
      test: /\.json$/,
      type: "javascript/auto",
      loader: "json-loader"
    });

    return config;
  },
}));
