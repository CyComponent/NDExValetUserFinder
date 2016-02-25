import { connect } from 'react-redux'
import NetworkFinder from '../component/network_finder'

function mapStateToProps(state) {
  return {
    networkLists: state.networkLists,
    networkFinder: state.networkFinder
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NetworkFinder)
