import { connect } from 'react-redux'
import NetworkFinder from '../component/network_finder'

import { vizSwitch, updateQuery, updateUser, updatePass, login, logout, addToCart, removeFromCart } from '../state/reducers/network_finder_reducer'

function mapStateToProps(state) {
  return {
    networkLists: state.networkLists,
    query: state.networkFinder.get('query'),
    viz: state.networkFinder.get('selected_viz'),
    cart: state.networkFinder.get('cart'),
    user: state.networkFinder.get('user'),
    pass: state.networkFinder.get('pass'),
    isFetching: state.networkFinder.get('isFetching'),
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
    removeFromCart: (network) => dispatch(removeFromCart(network))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NetworkFinder)
