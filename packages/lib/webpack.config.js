var configBase = require("./webpack.config.base");
var path = require('path');
var merge = require("webpack-merge");
var DtsBundleWebpack = require('dts-bundle-webpack')

module.exports = function (env, argv) {
  return merge(configBase(env, argv), {
    context: path.join(__dirname, 'src'),
    entry: {
      "index": './ts/paradicms/gui/lib/index.ts'
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: ''
    },
    plugins: [new DtsBundleWebpack({
      main: "src/ts/paradicms/gui/lib/index.d.ts",
      name: "paradicms-gui-lib",
      out: path.join(__dirname, "dist", "index.d.ts")
    })]
  });
}
