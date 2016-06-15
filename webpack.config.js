var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname,
    filename: "/src/bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
