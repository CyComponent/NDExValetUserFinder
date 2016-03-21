import { ADD_RESULTS } from "../actions"
import { Map } from 'immutable'

const defaultNetworkLists = Map({
  Search: [
    {
      name: "BEL Framework Large Corpus",
      owner: "test",
      edgeCount: 1922,
      nodeCount: 1103,
      uri: "http://public.ndexbio.org/network/ce581ff5-ec87-11e5-95db-06603eb7f303",
      creationTime: 1458250373129,
      modificationTime: 1458250414594
    }
  ]
})

export default function networkLists(state = defaultNetworkLists, action) {
    switch(action.type) {
      case ADD_RESULTS:
        return state.set('Search', action.results)
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


