import { connect } from 'react-redux'
import NetworkFinder from '../component/network_finder'
import { vizSwitch, updateQuery, updateUser, updatePass, login, logout, addToCart, removeFromCart, startSearch, endSearch } from '../state/reducers/network_finder_reducer'
import { addResults } from '../state/reducers/network_lists_reducer'
import networkFinderReducer from '../state/reducers/network_finder_reducer'
import networkListsReducer from '../state/reducers/network_lists_reducer'
require("../style/app.scss")

function mapStateToProps(state) {
  return {
    networkLists: state.networkLists,
    query: state.networkFinder.get('query'),
    topbar: state.networkFinder.get('topbar'),
    palette: state.networkFinder.get('style'),
    viz: state.networkFinder.get('selected_viz'),
    cart: state.networkFinder.get('cart'),
    user: state.networkFinder.get('user'),
    pass: state.networkFinder.get('pass'),
    isSearching: state.networkFinder.get('isSearching'),
    logged_in: state.networkFinder.get('logged_in')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    vizSwitch: (nextViz) => dispatch(vizSwitch(nextViz)),
    updateQuery: (newText) => dispatch(updateQuery(newText)),
    updateUser: (newUser) => dispatch(updateUser(newUser)),
    updatePass: (newPass) => dispatch(updatePass(newPass)),
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    addToCart: (network) => dispatch(addToCart(network)),
    removeFromCart: (network) => dispatch(removeFromCart(network)),
    startSearch: () => dispatch(startSearch()),
    endSearch: () => dispatch(endSearch()),
    addResults: (searchResults) => dispatch(addResults(searchResults))
  }
}

const component = connect(
    mapStateToProps,
    mapDispatchToProps
  )(NetworkFinder)

const reducers = {
  networkFinder: networkFinderReducer,
  networkLists: networkListsReducer
}

export { component, reducers }
