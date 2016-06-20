/*
export default () => ({
  path: 'about',
  getComponent (nextState, cb){
    require.ensure([], (require)=>{
      const About = require('./About').default
      cb(null, About)
    })
  }
})
*/

import About from './About'
export default () => ({
  path: 'about',
  component: About
})

