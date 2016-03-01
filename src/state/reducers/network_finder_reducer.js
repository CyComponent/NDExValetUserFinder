import { VIZ_SWITCH, UPDATE_QUERY, ADD_TO_CART, REMOVE_FROM_CART } from "../actions"
import { Map, Set } from 'immutable'

const defaultNetworkFinderState = Map({
  query: "",
  selected_viz: "list",
  selected_tab: "",
  cart: Set()
})

export default function networkFinder(state = defaultNetworkFinderState, action) {
    switch(action.type) {
      case VIZ_SWITCH:
        return state.set('selected_viz', action.viz.slice(0))
      case UPDATE_QUERY:
        return state.set('query', action.query.slice(0))
      case ADD_TO_CART:
        return state.set('cart', state.get('cart').add(action.network))
      case REMOVE_FROM_CART:
        return state.set('cart', state.get('cart').remove(action.network))
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

export function addToCart(network) {
  return {
    type: ADD_TO_CART,
    network: network
  }
}

export function removeFromCart(network) {
  return {
    type: REMOVE_FROM_CART,
    network: network
  }
}
