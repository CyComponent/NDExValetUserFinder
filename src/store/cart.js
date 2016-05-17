/*
 * Author: Eric Sage <eric.david.sage@gmail.com>
 *
 * Keep a list of networks considered the working set of application. Accepts network summary objects from
 * the ndexLucene store.
 */

import { Map, Set } from 'immutable'

const ADD_NETWORK = "ADD_NETWORK"
const DELETE_NETWORK = "REMOVE_NETWORK"
const CLEAR = "CLEAR"

const defaultState = Set()

export default function cyComponentState(state = defaultState, action) {
    switch(action.type) {
      case ADD_NETWORK:
        return state.add(action.network)
      case DELETE_NETWORK:
        return state.delete(action.network)
      case CLEAR:
        return state.clear()
      default:
        return state
    }
}

/*Add network summary to store*/
export function addNetwork(networkSummary) {
  return { type: ADD_NETWORK, network: networkSummary }
}

/*Delete network summary from store*/
export function deleteNetwork(networkSummary) {
  return { type: DELETE_NETWORK, network: networkSummary }
}

/*Clear working set*/
export function clear() {
  return { type: CLEAR }
}
