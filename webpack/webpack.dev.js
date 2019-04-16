const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const loadPresets = require('./presets/loadPresets')

module.exports = env =>
	merge(
		common,
		{
			mode: 'development',

			devtool: 'eval-source-map',

			output: {
				filename: '[name].js',
				chunkFilename: '[name].chunk.js',
			},

			devServer: {
				contentBase: path.resolve(__dirname, '../public/'),
				port: 3000,
				open: true,
				overlay: true,
				hot: true,
				historyApiFallback: true,
			},

			module: {
				rules: [
					{
						test: /\.(?:sa|sc|c)ss$/,
						use: ['style-loader', 'css-loader', 'sass-loader'],
					},
				],
			},
		},
		loadPresets(env),
	)
