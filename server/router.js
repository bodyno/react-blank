import { match, RouterContext } from 'react-router'
import routes from '../src/routes'
import React from 'react'
import { renderToString } from 'react-dom/server'

export default function renderAppRouter () {
  return (ctx, next) => new Promise((resolve, reject) => {
    const location = ctx.request.url

    match({ routes, location }, (error, redirectLocation, renderProps) => {

      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        ctx.redirect(redirectLocation.pathname + redirectLocation.search, '/')
        resolve()
        return next()
      } else if (renderProps) {
        const html = renderToString(
          <RouterContext {...renderProps} />
        )
        ctx.body = renderFullPage(html)
        resolve()
      } else {
        resolve()
        return next()
      }
    })
  })
}

function renderFullPage(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root" style="height: 100%">${html}</div>
        <script src="/main.js"></script>
      </body>
    </html>
    `
}
