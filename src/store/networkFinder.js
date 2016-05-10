import { Map, Set } from 'immutable'

export const VIZ_SWITCH = "VIZ_SWITCH"
export const UPDATE_QUERY = "UPDATE_QUERY"
export const START_SEARCH = "START_SEARCH"
export const END_SEARCH = "END_SEARCH"
export const UPDATE_USER = "UPDATE_USER"
export const UPDATE_PASS = "UPDATE_PASS"
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

const defaultState = Map({
  style: {},
  topbar: true,
  query: "",
  isSearching: false,
  user: "",
  pass: "",
  logged_in: false,
  selected_viz: "props",
  selected_tab: "",
  results: Set(),
  cart: Set()
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
      case START_SEARCH:
        return state.set('isSearching', true)
      case END_SEARCH:
        return state.set('isSearching', false)
      case UPDATE_USER:
        return state.set('user', action.user.slice(0))
      case UPDATE_PASS:
        return state.set('pass', action.pass.slice(0))
      case LOGIN:
        return state.set('logged_in', true)
      case LOGOUT:
        return state.set('logged_in', false)
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

export function startSearch() {
  return {
    type: START_SEARCH
  }
}

export function endSearch() {
  return {
    type: END_SEARCH
  }
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user: user
  }
}

export function updatePass(pass) {
  return {
    type: UPDATE_PASS,
    pass: pass
  }
}

export function login() {
  return {
    type: LOGIN
  }
}

export function logout() {
  return {
    type: LOGOUT
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
