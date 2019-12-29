var configBase = require("./webpack.config.base");
var path = require('path');
var merge = require("webpack-merge");

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
    resolve: {
      alias: {
        paradicms: path.resolve(__dirname, 'src/ts/paradicms')
      }
    }
  });
}
