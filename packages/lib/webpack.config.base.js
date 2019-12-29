var webpack = require('webpack');

// plugins
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = function (env, argv) {
  return {
    // https://webpack.js.org/configuration/devtool/
    devtool: argv.mode === "production" ? 'hidden-source-map' : 'cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: "graphql-tag/loader"
        },
        {
          test: /\.(scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
              loader: 'postcss-loader', // Run post css actions
              options: {
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            }, {
              loader: 'sass-loader' // compiles Sass to CSS
            }
          ]
        },
        // .ts, .tsx
        {
          test: /\.tsx?$/,
          use: [
            argv.mode !== "production" && {
              loader: 'babel-loader'
            },
            'ts-loader'
          ].filter(Boolean)
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        DEVELOPMENT: argv.mode === "development",
        PRODUCTION: argv.mode === "production"
      })
    ],
    resolve: {
      extensions: ['.ts', '.tsx'],
      // Fix webpack's default behavior to not load packages with jsnext:main module
      // (jsnext:main directs not usually distributable es6 format, but es6 sources)
      mainFields: ['module', 'browser', 'main'],
      plugins: [new TsconfigPathsPlugin()]
    },
    target: 'web'
  };
}
