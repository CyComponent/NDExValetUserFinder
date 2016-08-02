import { Map, Set } from 'immutable'

export const VIZ_SWITCH = "VIZ_SWITCH"
export const UPDATE_QUERY = "UPDATE_QUERY"

const defaultState = Map({
  style: {},
  topbar: true,
  query: "",
  selected_viz: "props"
})

export default function networkFinder(state = defaultState, action) {
    if (!state.hydrated) {
      state = defaultState.merge(Map(state)).merge(Map({hydrated: true}))
    }
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
