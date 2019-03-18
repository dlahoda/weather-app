const webpack = require("webpack");
const path = require("path");

const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

require("dotenv").config();

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
      }, {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
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
    }),
    new MomentLocalesPlugin({
      localesToKeep: ["es-us", "uk", "ru"],
  })
  ],
  node: {
    fs: "empty"
  }
};