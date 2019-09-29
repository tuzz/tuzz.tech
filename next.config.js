const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  experimental: {
    publicDirectory: true,
  },
});
