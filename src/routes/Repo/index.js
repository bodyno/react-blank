if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default () => ({
  path: ':userName/:repoName',
  getComponent (nextState, cb){
    require.ensure([], (require)=>{
      const Repo = require('./Repo').default
      cb(null, Repo)
    }, 'repo')
  }
})
