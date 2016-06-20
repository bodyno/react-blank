import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import './styles/core.scss'
import routes from './routes'

const MOUNT_ELEMENT = document.getElementById('root')

let render = () => {
  const App=(
    <Router history={browserHistory} children={routes} />
  )
  ReactDOM.render(App, MOUNT_ELEMENT)
}

if (module.hot && __DEV__) {
  module.hot.accept()
}

render()
