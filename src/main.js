import React from 'react'
import ReactDOM from 'react-dom'

const MOUNT_ELEMENT = document.getElementById('root')

let render = () => {
  const App=(
    <h1>Hello World</h1>
  )
  ReactDOM.render(App, MOUNT_ELEMENT)
}

render()
