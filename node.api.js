export default (pluginOptions) => ({
  webpack: (config) => {
    config.entry.unshift("babel-polyfill");

    config.module.rules.push({
      test: /\.json$/,
      type: "javascript/auto",
      loader: "json-loader"
    });

    config.resolveLoader = {
      modules: ["node_modules", "app/loaders"],
    };

    return config;
  },
});
