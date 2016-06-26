import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NDExValet from './component/NDExValet'

import fields, * as fieldActions from './store/fields'
import cart, * as cartActions from './store/cart'

//Make these third party deps
import * as luceneActions from './store/lucene'

import './style/valet.scss'
import './style/react-bootstrap-table-helper.scss'

function mapStateToProps(state) {
  return {
    fields: state.valet.fields,
    cart: state.valet.cart,
    server: state.ndex.server,
    lucene: state.ndex.lucene
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fieldActions: bindActionCreators(fieldActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch),
    luceneActions: bindActionCreators(luceneActions, dispatch)
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
