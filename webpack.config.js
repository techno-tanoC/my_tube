module.exports = {
  entry: {
    // login: "./front/js/login/index.js"
  },
  output: {
    path: "./priv/static/js",
    filename: "[name].js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ["es2015", "react"]
      }
    }, {
      test: /\.css$/,
      loaders: ["style", "css-loader?modules"]
    }]
  }
}
