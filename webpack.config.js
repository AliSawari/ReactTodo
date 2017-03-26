const webpack = require('webpack');
module.exports = {
  entry: "./jsx/App.jsx",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    extensions:[".js",".jsx"]
  },
  module: {
    loaders: [
      {
        use : "babel-loader",
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      }
    ]
  }
}
