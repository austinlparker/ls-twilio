const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

const directory = path.resolve(__dirname);

module.exports = {
  entry: {
    main: "public/client.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[chunkhash].chunk.js",
    chunkFilename: "[chunkhash].[id].js"
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(directory),
      'node_modules',
    ],
    extensions: ['.ts', '.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./views/index.html"})
  ]
}

