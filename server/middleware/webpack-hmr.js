import WebpackHotMiddleware from 'webpack-hot-middleware'
import applyExpressMiddleware from '../lib/apply-express-middleware'

export default function (compiler) {
  const middleware = WebpackHotMiddleware(compiler)
  return async function koaWebpackHMR (ctx, next) {
    let hasNext = await applyExpressMiddleware(middleware, ctx.req, ctx.res)

    if(hasNext){
      await next()
    }
  }
}
