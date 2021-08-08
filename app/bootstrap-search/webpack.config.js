const webpack = require("webpack");
const path = require("path");

// variables
const distPath = path.join(__dirname, "./dist");
const srcPath = path.join(__dirname, "./src");

// plugins
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const mode = argv && argv.mode ? argv.mode : "development";

  return {
    context: srcPath,
    devServer: {
      clientLogLevel: "warning",
      contentBase: distPath,
      historyApiFallback: true,
      host: "localhost",
      // host: '0.0.0.0',
      hot: true,
      inline: true,
      open: true,
      port: 9000,
      proxy: {
        "/api": {
          target: {
            host: "localhost",
            protocol: "http:",
            port: 8081,
          },
          secure: false,
        },
      },
      // Need this to accept requests through the reverse tunnel.
      // public: "tunnel.minorgordon.net",
      stats: "minimal",
    },
    devtool: mode === "production" ? "hidden-source-map" : "eval-source-map",
    entry: {
      app: "./ts/main.tsx",
    },
    mode,
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
        {
          test: /\.ttl$/i,
          use: "raw-loader",
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
        },
      ],
    },
    output: {
      devtoolModuleFilenameTemplate: "[absolute-resource-path]",
      devtoolFallbackModuleFilenameTemplate: "[absolute-resource-path]?[hash]",
      path: distPath,
      filename: "js/search.js",
      publicPath: "",
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "img",
            to: path.join(distPath, "img/"),
          },
        ],
      }),
      new HtmlWebpackPlugin({
        hash: true,
        template: "index.html",
      }),
      new webpack.DefinePlugin({
        DEVELOPMENT: mode === "development",
        PRODUCTION: mode === "production",
      }),
    ],
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      fallback: {buffer: require.resolve("buffer/")},
      mainFields: ["module", "browser", "main"],
      alias: {
        "~": path.resolve(__dirname, "src/ts"),
      },
    },
    target: "web",
  };
};
