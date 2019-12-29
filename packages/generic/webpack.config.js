var configBase = require("../lib/webpack.config.base");
var configDevServer = require("../lib/webpack.config.devServer");
var path = require('path');
var merge = require("webpack-merge");
var webpack = require('webpack');

// variables
var distPath = path.join(__dirname, 'dist');
var srcPath = path.join(__dirname, 'src');

// plugins
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(configBase, configDevServer, function (env, argv) {
      return {
        context: srcPath,
        devServer: {
          contentBase: distPath
        },
        entry: {
          "generic-gui": './ts/paradicms/gui/generic/main.tsx'
        },
        output: {
          path: distPath,
          filename: 'js/[name].js',
          publicPath: ''
        },
        plugins: [
          new CopyWebpackPlugin([{
            from: 'img',
            to: path.join(distPath, 'img/')
          }, 'graphiql.html', 'robots.txt']),
          new MiniCssExtractPlugin({
            disable: argv.mode !== "production",
            filename: 'css/[name].css'
          }),
          new HtmlWebpackPlugin({
            hash: true,
            template: 'index.html'
          }),
          new webpack.DefinePlugin({
            DEVELOPMENT: argv.mode === "development",
            PRODUCTION: argv.mode === "production"
          })
        ],
        resolve: {
          alias: {
            paradicms: path.resolve(__dirname, 'src/ts/paradicms')
          }
        }
      }
    }
)
