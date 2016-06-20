import React from 'react'
import App from './App'
import Repos from './Repos'
import About from './About'
import Home from './Home'

export default [
  {
    path: '/',
    component: App,
    indexRoute: Home,
    childRoutes: [
      About(),
      Repos()
    ]
  }
]
