const defaultNetworkLists = {
  Search: [],
  Popular: [1,2,3,4,5,6,7,8],
  Recent: [1,2,3,4,5,6,7,8],
  Human: [1,2,3,4,5,6,7,8],
  Mouse: [1,2,3,4,5,6,7,8],
  Marine: [1,2,3,4,5,6,7,8]
}

export default function networkLists(state = defaultNetworkLists, action) {
    return state
}
