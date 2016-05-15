import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NDEXValet from './component/NDExValet'

import * as fieldActions from './store/field'
import * as pluginActions from './store/plugin'

import {
  cartActions,
  luceneActions
} from 'ndex-store'

require("./style/app.scss")

function mapStateToProps(state) {
  return {
    field: state.valet.field,
    plugin: state.valet.plugin,
    option: state.valet.option,
    cart: state.ndex.cart,
    cred: state.ndex.credential,
    lucene: state.ndex.lucene
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fieldActions: bindActionCreators(fieldActions, dispatch),
    pluginActions: bindActionCreators(pluginActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch),
    luceneActions: bindActionCreators(luceneActions, dispatch)
  }
}

const component = connect(
    mapStateToProps,
    mapDispatchToProps
  )(NDExValet)

const storeName = 'valet'

const store = {
  field,
  option,
  plugin
  networkFinder,
  networkLists
}

export {
  component,
  storeName,
  store
}
