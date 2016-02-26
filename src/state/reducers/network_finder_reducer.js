import { VIZ_SWITCH, UPDATE_QUERY } from "../actions"
import { Map } from 'immutable'

const defaultNetworkFinderState = Map({
  query: "",
  selected_viz: "list",
  selected_tab: "",
  cart: []
})

export default function networkFinder(state = defaultNetworkFinderState, action) {
    switch(action.type) {
      case VIZ_SWITCH:
        return state.set('selected_viz', action.viz.slice(0))
      case UPDATE_QUERY:
        return state.set('query', action.query.slice(0))
      default:
        return state
    }
}

export function vizSwitch(nextViz) {
  return {
    type: VIZ_SWITCH,
    viz: nextViz
  }
}

export function updateQuery(nextQuery) {
  return {
    type: UPDATE_QUERY,
    query: nextQuery
  }
}
