if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
export default {
  getComponent(nextState, cb){
    require.ensure([],(require)=>{
      const PageNotFound = require('./components/PageNotFound').default
      cb(null,PageNotFound)
    },'PageNotFound')
  }
}
