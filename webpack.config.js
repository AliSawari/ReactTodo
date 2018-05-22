// module.exports = {
//   entry: "./jsx/App.jsx",
//   output: {
//     path: __dirname,
//     filename: "./public/bundle.js"
//   },
//   resolve: {
//     extensions:[".js",".jsx"]
//   },
//   module: {
//     loaders: [
//       {
//         use : "babel-loader",
//         test: /\.jsx?$/,
//         exclude: /(node_modules)/
//       }
//     ]
//   }
// }


module.exports = {
  entry: './src/Main.js',
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    extensions:[".js",".jsx"]
  },
  module: {
    rules: [
      {
       exclude: /(node_modules)/,
       use: ['babel-loader']
      }
    ]
  }
}
