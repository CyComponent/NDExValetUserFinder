import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NDExSearch from '../component/NDExSearch'

import { networkActions } from 'ndex-store'

function mapStateToProps(state) {
  return {
    summaries: state.ndex.networks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ndexActions: bindActionCreators(networkActions, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NDExSearch)
