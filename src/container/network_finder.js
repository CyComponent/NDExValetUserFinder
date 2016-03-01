import { connect } from 'react-redux'
import NetworkFinder from '../component/network_finder'

import { vizSwitch, updateQuery, addToCart, removeFromCart } from '../state/reducers/network_finder_reducer'

function mapStateToProps(state) {
  return {
    networkLists: state.networkLists,
    query: state.networkFinder.get('query'),
    viz: state.networkFinder.get('selected_viz'),
    cart: state.networkFinder.get('cart')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    vizSwitch: (nextViz) => dispatch(vizSwitch(nextViz)),
    updateQuery: (newText) => dispatch(updateQuery(newText)),
    addToCart: (network) => dispatch(addToCart(network)),
    removeFromCart: (network) => dispatch(removeFromCart(network))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NetworkFinder)
