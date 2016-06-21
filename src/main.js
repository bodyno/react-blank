import React from 'react'
import ReactDOM from 'react-dom'
import { match, Router, useRouterHistory } from 'react-router'
import { Provider, useRouterHistory } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import './styles/core.scss'
import routes from './routes'

const MOUNT_ELEMENT = document.getElementById('root')

const render = () => {
  const App=(
    <Router history={history} children={routes} />
  )
  ReactDOM.render(App, MOUNT_ELEMENT)
}

if (module.hot && __DEV__) {
  module.hot.accept()
}

render()
