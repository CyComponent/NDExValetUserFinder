import { connect } from 'react-redux'
import NetworkFinder from './component/NDExValet'
import { vizSwitch, updateQuery, updateUser, updatePass, login, logout, addToCart, removeFromCart, startSearch, endSearch } from './store/networkFinder'
import { addResults } from './store/networkLists'
import networkFinder from './store/networkFinder'
import networkLists from './store/networkLists'
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
  )(NDExValet)

const stores = {
  networkFinder,
  networkLists
}

export { component, stores }
