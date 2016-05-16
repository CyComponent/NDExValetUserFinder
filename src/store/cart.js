/*
 * Author: Eric Sage <eric.david.sage@gmail.com>
 *
 * Keep a list of network ids considered the working set of application. Accepts network summary objects from
 * the ndexLucene store.
 */

import { Map, Set } from 'immutable'

const ADD_NETWORK_ID = "ADD_NETWORK"
const DELETE_NETWORK_ID = "REMOVE_NETWORK"
const CLEAR = "CLEAR"

const defaultState = Set()

export default function cyComponentState(state = defaultState, action) {
    switch(action.type) {
      case ADD_NETWORK_ID:
        return state.add(action.networkId)
      case DELETE_NETWORK_ID:
        return state.delete(action.networkId)
      case CLEAR:
        return state.clear()
      default:
        return state
    }
}

/*Extract the network id from a network summary object and add it to the working set*/
export function addNetwork(networkSummary) {
  return { type: ADD_NETWORK_ID, networkId: networkSummary.externalId }
}

/*Extract the network id from a network summary object and delete it from the working set*/
export function deleteNetwork(networkSummary) {
  return { type: DELETE_NETWORK_ID, networkId: networkSummary.externalId }
}

/*Add id to working set*/
export function addId(id) {
  return { type: ADD_NETWORK_ID, networkId: id }
}

/*Delete id from working set*/
export function deleteId(id) {
  return { type: DELETE_NETWORK_ID, networkId: id }
}

/*Clear working set*/
export function clear() {
  return { type: CLEAR }
}
