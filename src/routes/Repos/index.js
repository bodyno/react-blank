import Repo from '../Repo'

export default () => ({
  path: 'repos',
  childRoutes: [
    Repo()
  ],
  getComponent (nextState, cb){
    require.ensure([], (require)=>{
      const Repos = require('./Repos').default
      cb(null, Repos)
    })
  }
})
