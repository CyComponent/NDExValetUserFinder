import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NDEXValet from './component/NDExValet'

import fields, * as fieldActions from './store/fields'

import {
  cartActions,
  luceneActions
} from 'ndex-store'

require("./style/app.scss")

function mapStateToProps(state) {
  return {
    fields: state.valet.fields,
    cart: state.ndex.cart,
    cred: state.ndex.credential,
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

const store = { fields }

export {
  component,
  storeName,
  store
}
