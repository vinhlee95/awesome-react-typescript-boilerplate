const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'source-map',

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  devServer: {
    contentBase: path.resolve(__dirname, '../public/index.html'),
    port: 8000,
    open: true,
    overlay: true,
    hot: true,
    historyApiFallback: true
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },

  module: {
    rules: [
    ]
  }
})
