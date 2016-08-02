import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NDExValet from './component/NDExValet'

import fields, * as fieldActions from './store/fields'
import cart, * as cartActions from './store/cart'
import * as searchActions from './store/search'
import * as userActions from './store/users'

//Make these third party deps
import * as luceneActions from './store/lucene'

import './style/valet.scss'

function mapStateToProps(state) {
  return {
    fields: state.valet.fields,
    cart: state.valet.cart,
    server: state.ndex.server,
    users: state.ndex.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fieldActions: bindActionCreators(fieldActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

const component = connect(
    mapStateToProps,
    mapDispatchToProps
  )(NDExValet)

const storeName = 'valet'

const store = { fields, cart }

export {
  component,
  storeName,
  store,
  cartActions,
  fieldActions
}
