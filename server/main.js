import koa from 'koa'
import convent from 'koa-convert'
import config from '../config'
import webpack from 'webpack'
import webpackConfig from '../config/webpack.config'
import serve from 'koa-static'
import historyApiFallback from 'koa-connect-history-api-fallback'
import webpackDevMiddleware from './middleware/webpack-dev'
import webpackHMRMiddleware from './middleware/webpack-hmr'

const app = new koa()
const compiler = webpack(webpackConfig)
const {__DEV__, src, dist} = config

app.use(convent(historyApiFallback({
  verbose: false
})))

if(__DEV__){
  app.use(webpackDevMiddleware(compiler))
  app.use(webpackHMRMiddleware(compiler))
  app.use(convent(serve(src)))
}else{
  app.use(convent(serve(dist)))
}

export default app
