import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NDEXValet from './component/NDExValet'

import * as fieldActions from './store/field'
import * as vizActions from './store/viz'
import * as pluginActions from './store/plugin'

import {
  cartActions,
  credActions,
  luceneActions
} from 'ndex-store'

require("./style/app.scss")

function mapStateToProps(state) {
  return {
    field: state.valet.field,
    viz: state.valet.viz,
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
    vizActions: bindActionCreators(vizActions, dispatch),
    pluginActions: bindActionCreators(pluginActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch),
    credActions: bindActionCreators(credActions, dispatch),
    luceneActions: bindActionCreators(luceneActions, dispatch)
  }
}

const component = connect(
    mapStateToProps,
    mapDispatchToProps
  )(NDExValet)

const stores = {
  networkFinder,
  networkLists
}

export { component, stores }
