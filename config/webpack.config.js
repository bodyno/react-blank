import webpack from 'webpack'
import cssnano from 'cssnano'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import config from './index'

var APP_ENTRY_PATH = './src/main'
const {__DEV__, src, dist} = config
const webpackConfig = {
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

if(__DEV__) {
  webpackConfig.devtool = 'source-map';
}

webpackConfig.plugins = [
  new webpack.DefinePlugin({__DEV__}),
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    favicon: 'src/static/favicon.ico',
    inject: 'body',
    minify: {
      collapseWhitespace: true
    }
  })
]

if (__DEV__) {
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  )
} else {
  webpackConfig.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  )
}

const BASE_CSS_LOADER = 'css?sourceMap&-minimize'
const cssModulesLoader = [
  BASE_CSS_LOADER,
  'modules',
  'importLoaders=1',
  'localIdentName=[hash:base64:5]'
].join('&')

webpackConfig.module.loaders.push({
  test: /\.scss$/,
  include: src,
  loaders: [
    'style',
    cssModulesLoader,
    'postcss',
    'sass?sourceMap'
  ]
})

webpackConfig.module.loaders.push({
  test: /\.css$/,
  include: src,
  loaders: [
    'style',
    cssModulesLoader,
    'postcss'
  ]
})

webpackConfig.module.loaders.push({
  test: /\.scss$/,
  exclude: src,
  loaders: [
    'style',
    BASE_CSS_LOADER,
    'postcss',
    'sass?sourceMap'
  ]
})

webpackConfig.module.loaders.push({
  test: /\.css$/,
  exclude: src,
  loaders: [
    'style',
    BASE_CSS_LOADER,
    'postcss'
  ]
})

webpackConfig.postcss = [
  cssnano({
    autoprefixer: {
      add: true,
      remove: true,
      browsers: ['last 2 versions']
    },
    discardComments: {
      removeAll: true
    },
    discardUnused: false,
    mergeIdents: false,
    reduceIdents: false,
    safe: true,
    sourcemap: true
  })
]

webpackConfig.module.loaders.push(
  { test: /\.woff(\?.*)?$/,  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
  { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
  { test: /\.otf(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype' },
  { test: /\.ttf(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
  { test: /\.eot(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
  { test: /\.svg(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
  { test: /\.(png|jpg)$/,    loader: 'url?limit=8192' }
)

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
  filename: `main.js`,
  path: dist,
  publicPath: '/'
}:{
  filename: `[hash].js`,
  chunkFilename: '[hash].js',
  path: dist,
  publicPath: '/'
}

export default webpackConfig
