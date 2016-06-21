import App from './App'
import Repos from './Repos'
import About from './About'
import Home from './Home'
import PageNotFound from './PageNotFound'

export default [
  {
    path: '/',
    component: App,
    indexRoute: Home,
    childRoutes: [
      About(),
      Repos()
    ]
  },
  {
    path: '/404',
    indexRoute: PageNotFound
  },
  {
    path: '*',
    indexRoute: {
      onEnter(nextState,replace){
        replace('/404')
      }
    }
  }
]
