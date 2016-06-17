import React from 'react'
import App from './App'
import Repos from './Repos'
import About from './About'
import Home from './Home'

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

/*
export default React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/repos" component={Repos}>
            <Route path="/repos/:userName/:repoName" component={Repo}/>
          </Route>
          <Route path="/about" component={About}/>
        </Route>
      </Router>
    )
  }
})
*/
