import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './styles/core.scss'
import routes from './routes'

const MOUNT_ELEMENT = document.getElementById('root')

let render = () => {
  const App=(
    <Router history={browserHistory} children={routes} />
  )
  ReactDOM.render(App, MOUNT_ELEMENT)
}

if (module.hot) {
  module.hot.accept()
}

render()
