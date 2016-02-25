import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import networkLists from './reducers/network_lists_reducer'
import networkFinder from './reducers/network_finder_reducer'

const logger = createLogger()

const finalCreateStore = compose(
  applyMiddleware(thunk, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore(reducers = { networkLists, networkFinder }) {
  return finalCreateStore(combineReducers(reducers))
}
