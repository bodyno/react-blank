import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import config from './index'

var APP_ENTRY_PATH = './src/main'
const {__DEV__, src, dist} = config
const webpackConfig = {
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
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
      loader: 'babel',
      query: {
        'presets': ['es2015', 'stage-0', 'react'],
        'env': {
          'development': {
            'presets': ['react-hmre']
          }
        }
      },
      include: src
    }]
  }
}

webpackConfig.entry = __DEV__ ?
  [
    'webpack-hot-middleware/client?path=/__webpack_hmr',
    APP_ENTRY_PATH
  ]:
  [
    APP_ENTRY_PATH
  ]

webpackConfig.output = __DEV__ ?
{
  path: dist,
  filename: `main.js`
}:{
  path: dist,
  filename: `[hash].js`
}

export default webpackConfig
