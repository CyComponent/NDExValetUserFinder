
import { Map } from 'immutable'

import { searchFor } from './search'

const ADD_USER = "ADD_USER"
const DELETE_USER = "DELETE_USER"

const defaultState = Map({})

export default function update(state = defaultState, action) {
  switch(action.type) {
    case ADD_USER:
      return state.set(action.userName, action.userSummary)
    case DELETE_USER:
      return state.delete(action.userName)
    default:
      return state
  }
}

export function addUser(userName, userSummary) {
  return { type: ADD_USER, userName, userSummary }
}

export function deleteUser(userName) {
  return { type: DELETE_USER, userName }
}

export function searchUsers(server, query, resultSize = 50) {
  return searchFor(server, '/rest/user/search/0/', query, resultSize, (dispatch, userSummaries) => {
    console.log(userSummaries)
    userSummaries.map((U) => {
      dispatch(addUser(U.externalId, U))
    })
  })
}
