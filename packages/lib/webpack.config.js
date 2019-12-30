var configBase = require("./webpack.config.base");
var path = require('path');
var merge = require("webpack-merge");
var DtsBundleWebpack = require('dts-bundle-webpack')
var webpack = require("webpack");

module.exports = function (env, argv) {
  return merge(configBase(env, argv), {
    context: path.join(__dirname, 'src'),
    entry: {
      "index": './ts/paradicms/gui/lib/index.ts'
    },
    // https://github.com/facebook/react/issues/13991
    externals: {
      react: "react",
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      library: "paradicms-gui-lib",
      libraryTarget: "umd",
      publicPath: ''
    },
    plugins: [
      new DtsBundleWebpack({
        main: path.join(__dirname, "out", "index.d.ts"),
        name: "paradicms-gui-lib",
        out: path.join(__dirname, "dist", "index.d.ts")
      }),
      new webpack.WatchIgnorePlugin([
        /\.js$/,
        /\.d\.ts$/
      ])
    ]
  });
}
