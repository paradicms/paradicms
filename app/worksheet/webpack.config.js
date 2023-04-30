const path = require("path");
const webpack = require("webpack");

// plugins
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const mode = argv && argv.mode ? argv.mode : "development";

  const dataFilePath = process.env.DATA_FILE_PATHS;
  if (!dataFilePath) {
    throw new EvalError("no data file paths specified");
  } else if (dataFilePath.indexOf(path.delimiter) !== -1) {
    throw new RangeError(
      "cannot specify more than one data file path: " + dataFilePath
    );
  }

  return {
    context: __dirname,
    devServer: {
      historyApiFallback: true,
      host: "localhost",
      hot: true,
      open: true,
      port: 3000,
      // public: "tunnel.minorgordon.net"
    },
    devtool: mode === "production" ? "hidden-source-map" : "eval-source-map",
    entry: {
      app: "./src/ts/main.tsx",
    },
    ignoreWarnings: [/Failed to parse source map/],
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
      filename: "js/worksheet.js",
      publicPath: "",
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {from: dataFilePath, to: "data.trig"},
          {from: "src/img", to: "img"},
          {from: "public/img", to: "img"},
          {from: "src/google*.html", to: "."},
          {
            from: "src/GettingStartedWithDressDiscover.pdf",
            to: "GettingStartedWithDressDiscover.pdf",
          },
          {
            from: "src/google070af747ec3734ac.html",
            to: "google070af747ec3734ac.html",
          },
        ],
      }),
      new webpack.DefinePlugin({
        DEVELOPMENT: mode === "development",
        PRODUCTION: mode === "production",
      }),
      new HtmlWebpackPlugin({
        hash: true,
        template: "src/index.html",
        templateParameters: {
          stylesheetHref:
            process.env.STYLESHEET_HREF ??
            "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
        },
      }),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
    ],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src/ts"),
      },
      extensions: [".js", ".ts", ".tsx"],
      fallback: {
        buffer: require.resolve("buffer/"),
        stream: require.resolve("stream-browserify"),
      },
      mainFields: ["module", "browser", "main"],
    },
    target: "web",
  };
};
