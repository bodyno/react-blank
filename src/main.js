import React from 'react'
import ReactDOM from 'react-dom'
import { match, Router, browserHistory } from 'react-router'
import './styles/core.scss'
import routes from './routes'

const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`
const MOUNT_ELEMENT = document.getElementById('root')

const render = () => {
  match({ routes, location }, () => {
    const App=(
      <Router history={browserHistory} children={routes} />
    )
    ReactDOM.render(App, MOUNT_ELEMENT)
  })
}

if (module.hot && __DEV__) {
  module.hot.accept()
}

render()
