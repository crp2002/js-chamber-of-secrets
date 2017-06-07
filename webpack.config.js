const path = require('path');
const webpack = require('webpack');

module.exports = {
	// entry: ['webpack/hot/dev-server','./client/index.js'],
	entry: {
		home: ['webpack/hot/dev-server','./client/index.js'],
		page1: path.resolve(__dirname, './client/page1.js'),
		page2: path.resolve(__dirname, './client/page2.js'),
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].webpack-bundle.js',
		publicPath: '/build/'
	},
	watch: true,

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: __dirname,
		hot: true,
		inline: true,
		port: 8080,
		stats: {
			colors: true
		}
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
						presets: ['es2015', 'react']
				}
			},
			{
				test: /(\.css|\.scss)$/,
				loaders: ['style', 'css', 'sass']
			}
		]
	}
};