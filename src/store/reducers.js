import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

export const reducers = (asyncReducer) => {
  return combineReducers({
    router,
    ...asyncReducer
  })
}

export default reducers
