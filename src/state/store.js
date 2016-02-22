import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import emptyReducer from './reducers/empty_reducer'

const logger = createLogger()

const finalCreateStore = compose(
  applyMiddleware(thunk, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore(reducers = { emptyReducer }) {
  return finalCreateStore(combineReducers(reducers))
}
