import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NDExValet from './component/NDExUserSearch'

import './style/valet.scss'

function mapStateToProps(state) {
  return {
    users: state.ndex.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default NDExUserSearch = connect(
    mapStateToProps,
    mapDispatchToProps
  )(NDExUserSearch)
