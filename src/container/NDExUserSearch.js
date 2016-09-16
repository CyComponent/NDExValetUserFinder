import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NDExSearch from '../component/NDExSearch'

import { userActions } from 'ndex-store'

function mapStateToProps(state) {
  return {
    summaries: state.ndex.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ndexActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NDExSearch)
