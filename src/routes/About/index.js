export default () => ({
  path: 'about',
  getComponent (nextState, cb){
    require.ensure([], (require)=>{
      const Repos = require('./About').default
      cb(null, Repos)
    })
  }
})
