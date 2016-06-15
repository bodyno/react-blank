var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var config = require('./config')

var __DEV__ = config.__DEV__
var __PROD__ = config.__PROD__

var APP_ENTRY_PATH = './src/main'

webpackConfig = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/static/favicon.ico',
      minify: {
        collapseWhitespace: true
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};

webpackConfig.entry = __DEV__ ?
  [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    APP_ENTRY_PATH
  ]:
  [
    APP_ENTRY_PATH
  ];

webpackConfig.output = __DEV__ ?
{
  path: path.join(__dirname, 'dist'),
  filename: `main.js`
}:{
  path: path.join(__dirname, 'dist'),
  filename: `[hash].js`
}

module.exports=webpackConfig;
