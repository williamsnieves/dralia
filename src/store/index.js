import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducers from '../reducers'

let store = () => {
  return createStore(
    appReducers,
    compose(
      applyMiddleware(thunk),
      typeof window === 'object' &&
        typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f
    )
  )
}

export default store
