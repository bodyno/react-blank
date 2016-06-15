var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

var compiler = webpack(config);
new WebpackDevServer(compiler, {
  contentBase: '/src',
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result){
  console.log('Listening at http://localhost:3000/')
})
