var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry:path.resolve(__dirname,'./src/index.js'),
	output:{
		path:path.resolve(__dirname,'/'),
	},
	module: {
		rules: [{
				test: /\.html$/,
				use: 'html-loader',
			},
			{
				test: /\.js$/,
				use: [
					'babel-loader',
					// path.resolve(__dirname,'./src/loaders/react-if-else.js'),
					// path.resolve(__dirname,'./src/loaders/react-if-else-AST.js'),
					// {
					// 	loader:path.resolve(__dirname,'./src/loaders/react-if-else.js'),
					// 	options:{
					// 		name:"zhao"
					// 	}
					// }
				],
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 100000,
				}
			},
			{
				test: /\.css$/,
				use:[
					{
						loader:'style-loader',
					},
					{
						loader:'css-loader',

					}
				]
			}
		]
	},
	devServer:{
		host:'localhost',
		port:'3000',
		open:true,
		hot:true,
	},
	plugins:[
		new htmlWebpackPlugin({														// 处理 html及页内引用资源
			template: path.resolve(__dirname,'./src/index.html'),     
			filename: 'index.html',                                 
			showErrors:true,                    
			inject: true,            		// script 标签位于 html 文件的 body 底部 
		}),
	]
}