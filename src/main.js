import React from 'react'
import ReactDOM from 'react-dom'
import classes from './styles/test.scss'
import './styles/core.scss'

const MOUNT_ELEMENT = document.getElementById('root')

let render = () => {
  const App=(
    <div>
      <h1 className={classes.title}>Hello World</h1>
    </div>
  )
  ReactDOM.render(App, MOUNT_ELEMENT)
}

console.log(__DEV__);
if (module.hot) {
  module.hot.accept()
}

render()
