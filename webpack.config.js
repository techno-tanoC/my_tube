module.exports = {
  entry: {
    app: "./front/js/app/index.js"
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
        presets: ["es2015", "react"],
        plugins: ["transform-object-rest-spread"]
      }
    }, {
      test: /\.css$/,
      loaders: ["style", "css-loader?modules"]
    }]
  }
}
