import { Route, IndexRoute } from 'react-router'
import React from 'react'
import App from './App'
import Repos from './Repos'
import About from './About'
import Home from './Home'
import Repo from './Repo'

export const createRoutes = [
  {
    path: '/',
    component: App,
    indexRoute: Home,
    childRoutes: [
      Repos(),
      About()
    ]
  }
]

export default createRoutes

/*export default (
  <Route path="/" component={Home}>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/about" component={About}/>
  </Route>
)*/
