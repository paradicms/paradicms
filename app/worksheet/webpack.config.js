const path = require("path");
const webpack = require("webpack");

// plugins
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const mode = argv && argv.mode ? argv.mode : "development";

  const dataFilePath = process.env.DATA_FILE_PATH;
  if (!dataFilePath) {
    throw new EvalError("no data file path specified");
  }

  return {
    context: path.join(__dirname, "./src"),
    devServer: {
      historyApiFallback: true,
      host: "localhost",
      hot: true,
      open: true,
      port: 9000,
      // public: "tunnel.minorgordon.net"
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
          test: /\.tsx?$/,
          use: "ts-loader",
        },
      ],
    },
    output: {
      devtoolModuleFilenameTemplate: "[absolute-resource-path]",
      devtoolFallbackModuleFilenameTemplate: "[absolute-resource-path]?[hash]",
      path: path.join(__dirname, "out"),
      filename: "js/towndex.js",
      publicPath: "",
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {from: dataFilePath, to: "data.ttl"},
          "img",
          "google*.html",
          "*.pdf",
        ],
      }),
      new webpack.DefinePlugin({
        DEVELOPMENT: mode === "development",
        PRODUCTION: mode === "production",
      }),
      new HtmlWebpackPlugin({
        hash: true,
        template: "index.html",
      }),
    ],
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      mainFields: ["module", "browser", "main"],
      alias: {
        "~": path.resolve(__dirname, "src/ts"),
      },
    },
    target: "web",
  };
};
