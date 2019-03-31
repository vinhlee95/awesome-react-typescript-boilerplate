const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

  entry:["./src/index.js"],

  output: {
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin()
  ]
}