module.exports = {
  outputDir: "wwwroot",
  publicPath: "/",
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimizer[0].options.terserOptions = Object.assign(
        {},
        config.optimization.minimizer[0].options.terserOptions,
        {
          ecma: 5,
          compress: {
            keep_fnames: true
          },
          warnings: false,
          mangle: {
            keep_fnames: true
          }
        }
      );
    }
  },
  chainWebpack: config => {
    // aspnet uses the other hmr so remove this one
    config.plugins.delete("hmr");
  }
};
