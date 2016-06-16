import WebpackDevMiddleware from 'webpack-dev-middleware'
import applyExpressMiddleWare from '../lib/apply-express-middleware'

export default function (compiler) {
  const middleWare = WebpackDevMiddleware(compiler, {
    contentBase: '/src',
    hot: true,
    stats: {
      chunks : false,
      chunkModules : false,
      colors : true
    },
    lazy: false
  })

  return async function koaWebpackDevMiddleWare (ctx, next){
    let hasNext = await applyExpressMiddleWare(middleWare, ctx.req, {
      end: (content) => (ctx.body = content),
      setHeader: function () {
        ctx.set.apply(ctx, arguments)
      }
    })

    if(hasNext){
      await next()
    }
  }
}
