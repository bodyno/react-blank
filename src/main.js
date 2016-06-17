import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './styles/core.scss'
import App from './routes/App'
import Repos from './routes/Repos'
import About from './routes/About'
import Repo from './routes/Repo'

const MOUNT_ELEMENT = document.getElementById('root')

let render = () => {
  const Ele=(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/repos" component={Repos}>
          <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
  )
  ReactDOM.render(Ele, MOUNT_ELEMENT)
}

if (module.hot) {
  module.hot.accept()
}

render()
