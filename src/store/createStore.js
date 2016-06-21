import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import reducers from './reducers'

export default () => {
  const store = createStore(reducers())
  return store
}





