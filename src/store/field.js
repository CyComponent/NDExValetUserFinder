/*
 * Author: Eric Sage <eric.david.sage@gmail.com>
 *
 * Track and update fields in NDEx Valet
 */

import { Map } from 'immutable'

const UPDATE_QUERY
const UPDATE_LOGIN_NAME
const UPDATE_LOGIN_PASS

cost defaultState = Map({
  query: "",
  name: "",
  pass: ""
})

export default function fieldState(state = defaultState, action) {
  switch(action.type) {
    case UPDATE_QUERY:
      return state.set('query', action.query)
    case UPDATE_LOGIN_NAME:
      return state.set('name', action.name)
    case UPDATE_LOGIN_PASS:
      return state.set('pass', action.pass)
    default:
      return state
  }
}

/*Update the query field*/
export function updateQuery(query) {
  return { type: UPDATE_QUERY, query }
}

/*Update the query field*/
export function updateName(name) {
  return { type: UPDATE_LOGIN_NAME, name }
}

/*Update the query field*/
export function updatePass(pass) {
  return { type: UPDATE_QUERY, pass }
}
