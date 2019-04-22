const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
	entry: path.resolve(__dirname, '../../src/index.tsx'),

	output: {
		path: path.resolve(__dirname, '../../dist'),
		publicPath: '/',
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},

	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(eot|otf|ttf|woff|woff2)$/,
				use: 'file-loader',
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							// Inline files smaller than 10 kB
							limit: 10 * 1024,
							noquotes: true,
						},
					},
				],
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							// Inline files smaller than 10 kB
							limit: 10 * 1024,
						},
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								enabled: false,
								// NOTE: mozjpeg is disabled as it causes errors in some Linux environments
								// Try enabling it in your environment by switching the config to:
								// enabled: true,
								// progressive: true,
							},
							gifsicle: {
								interlaced: false,
							},
							optipng: {
								optimizationLevel: 7,
							},
							pngquant: {
								quality: '65-90',
								speed: 4,
							},
						},
					},
				],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../../public/index.html'),
		}),
		new ForkTsCheckerWebpackPlugin({
			tsconfig: path.resolve(__dirname, '../../tsconfig.json'),
			tslint: true,
		}),
		new Dotenv({
			path: path.resolve(__dirname, '../../src/.env'),
		}),
	],
}
