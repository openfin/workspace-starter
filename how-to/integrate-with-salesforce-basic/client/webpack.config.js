const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './client/src/provider.ts',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: `${path.dirname(require.resolve('@openfin/salesforce-lwc'))}/preload.js`,
					to: path.resolve(__dirname, '..', 'public', 'js')
				}
			]
		})
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: 'provider.bundle.js',
		path: path.resolve(__dirname, '..', 'public', 'js')
	}
};
