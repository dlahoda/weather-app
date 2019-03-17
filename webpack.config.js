const webpack = require("webpack");
const path = require('path');

require('dotenv').config();

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public", "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          "babel-loader"
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true,
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_KEY": JSON.stringify(process.env.API_KEY),
      "process.env.API_URL": JSON.stringify(process.env.API_URL)
    })
  ],
  node: {
    fs: 'empty'
  }
};