var webpack = require("webpack");
var path = require("path");

module.exports = {

  entry: {
    app: "./src/app.js"
  },
  output: {
    filename: "public/bundle.js",
  },
  devtool: "#source-map",
  module: {
    loaders: [
      {
        loader: "babel-loader",
        exclude: /(node_modules)/,
        query: {
          presets:["es2015"]
        }
      }
    ]
  }
}
