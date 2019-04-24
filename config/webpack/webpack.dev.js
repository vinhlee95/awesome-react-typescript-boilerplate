const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const loadPresets = require('./presets/loadPresets')
const CircularDependencyPlugin = require('circular-dependency-plugin')

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
				contentBase: path.resolve(__dirname, '../../public/'),
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
					{
						test: /\.(ts|js)x?$/,
						use: 'react-hot-loader/webpack',
					},
				],
			},
			plugins: [
				new CircularDependencyPlugin({
					exclude: /a\.{tsx, ts, jsx, js}|node_modules/, // exclude node_modules
					failOnError: false, // show a warning when there is a circular dependency
				}),
			],
		},
		loadPresets(env),
	)
