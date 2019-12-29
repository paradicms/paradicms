module.exports = function (contentBase) {
  return {
    devServer: {
      clientLogLevel: 'warning',
      contentBase: contentBase,
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
    }
  }
}
