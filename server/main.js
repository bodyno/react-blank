import koa from 'koa'
import Router from 'koa-router'
import koaCompress from 'koa-compress'
import convert from 'koa-convert'
import serve from 'koa-static'
import config from '../config'
import webpack from 'webpack'
import webpackConfig from '../config/webpack.config'
import historyApiFallback from 'koa-connect-history-api-fallback'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'

import renderAppRouter from './router'

const app = new koa()
const compiler = webpack(webpackConfig)
const {__DEV__, src, dist} = config

app.use(koaCompress())
/*app.use(convert(historyApiFallback({
  verbose: false
})))*/

const router = new Router()
router.get('/(.*)', renderAppRouter())
app.use(router.routes())

if(__DEV__){
  app.use(devMiddleware(compiler), {
    contentBase: src,
    hot: true,
    noInfo: true,
    quiet: true,
    stats: {
      colors : true
    }
  })
  app.use(hotMiddleware(compiler))
  app.use(convert(serve(src)))
}else{
  app.use(convert(serve(dist)))
}

export default app
