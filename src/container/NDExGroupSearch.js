import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NDExSearch from '../component/NDExSearch'

import { groupActions } from 'ndex-store'

function mapStateToProps(state) {
  return {
    summaries: state.ndex.groups
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ndexActions: bindActionCreators(groupActions, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NDExSearch)
