import { Map } from 'immutable'

const defaultNetworkLists = Map({})

const ADD_RESULTS = 'ADD_RESULTS'

export default function networkLists(state = defaultNetworkLists, action) {
    switch(action.type) {
      case ADD_RESULTS:
        return state.set('Results', action.results)
      default:
        return state
    }
}

export function addResults(searchResults) {
  return {
    type: ADD_RESULTS,
    results: searchResults
  }
}


