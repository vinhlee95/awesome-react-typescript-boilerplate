const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
	mode: 'development',

	devtool: 'eval-source-map',

	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
	},

	devServer: {
		contentBase: path.resolve(__dirname, '../public/index.html'),
		port: 3000,
		open: true,
		overlay: true,
		hot: true,
		historyApiFallback: true,
	},

	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
		publicPath: '/',
	},

	module: {
		rules: [
			{
				test: /\.(?:sa|sc|c)ss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: '[path][name]__[local]--[hash:base64:5]',
						},
					},
					'sass-loader',
				],
			},
		],
	},
})
