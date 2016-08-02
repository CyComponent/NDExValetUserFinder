import {Map} from 'immutable'

const SEARCH_BEGIN = 'SEARCH_BEGIN'
const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
const SEARCH_ERROR = 'SEARCH_ERROR'

const defaultState = Map({
  searching: false,
  error: null
})

export default function downloadState(state = defaultState, action) {
  switch (action.type) {
    case SEARCH_BEGIN:
      return state.merge({
        searching: true
      })
    case SEARCH_SUCCESS:
      return state.merge({
        searching: false
      })
    case SEARCH_ERROR:
      return state.merge({
        searching: false,
        error: action.error
      })
    default:
      return state
  }
}

/*Set the downloading flag*/
export function searchBegin() {
  return {type: SEARCH_BEGIN}
}

/*Send network to the networks store and remove the downloading flag*/
export function searchSuccess() {
  return {type: SEARCH_SUCCESS}
}

/*Set an error field if a download did not complete successfully*/
export function searchError(error) {
  return {type: SEARCH_ERROR, error}
}

export function searchFor(server, endpoint, query, resultSize, summaryAction) {
  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  if (server.loggedIn) {
    headers['Authorization'] = 'Basic ' + btoa(server.userName + ':' + server.userPass)
  }
  return dispatch =>
    fetch(server.serverAddress + endpoint + resultSize, {
      method: 'post',
      headers: headers,
      body: JSON.stringify({searchString: query})
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        response.json().then((summaries) => {
          summaryAction(dispatch, summaries)
          dispatch(searchSuccess())
        })
      } else {
        const error = new Error(response.statusText)
        error.response = response
        dispatch(searchError(error))
        throw error
      }
    }).catch(error => {
      window.alert('NDEx lucene Search failed, reason:', error)
    })
}
