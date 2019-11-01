export default (pluginOptions) => ({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      type: "javascript/auto",
      loader: "json-loader"
    });

    return config;
  },
});
