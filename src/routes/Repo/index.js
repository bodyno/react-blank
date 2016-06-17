export default () => ({
  path: ':userName/:repoName',
  getComponent (nextState, cb){
    require.ensure([], (require)=>{
      const Repos = require('./Repo').default
      cb(null, Repos)
    }, 'repo')
  }
})
