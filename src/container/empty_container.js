import { connect } from 'react-redux'
import EmptyComponent from '../component/empty_component'

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmptyComponent)
