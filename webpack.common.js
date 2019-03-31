const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

  entry:["./src/index.js"],

  output: {
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
    ]
  },

  plugins: [
    new CleanWebpackPlugin()
  ]
}