var webpack = require('webpack');
var path = require('path');

// variables
var distPath = path.join(__dirname, 'dist');
var srcPath = path.join(__dirname, 'src');

// plugins
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = function (env, argv) {
  return {
    context: srcPath,
    devServer: {
      clientLogLevel: 'warning',
      contentBase: distPath,
      historyApiFallback: {disableDotRule: true},
      host: 'localhost',
      // host: '0.0.0.0',
      hot: true,
      inline: true,
      open: false,
      port: 9001,
      proxy: {
        "/graphql": {
          "target": {
            "host": "localhost",
            "protocol": 'http:',
            "port": 9000
          },
          secure: false
        }
      },
      // Need this to accept requests through the reverse tunnel.
      // public: "tunnel.minorgordon.net",
      stats: 'minimal'
    },
    // https://webpack.js.org/configuration/devtool/
    devtool: argv.mode === "production" ? 'hidden-source-map' : 'cheap-module-eval-source-map',
    entry: {
      "generic-gui": './ts/paradicms/gui/generic/main.tsx'
    },
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
      extensions: ['.js', '.ts', '.tsx'],
      // Fix webpack's default behavior to not load packages with jsnext:main module
      // (jsnext:main directs not usually distributable es6 format, but es6 sources)
      mainFields: ['module', 'browser', 'main'],
      alias: {
        paradicms: path.resolve(__dirname, 'src/ts/paradicms')
      }
    },
    target: 'web'
  };
}
