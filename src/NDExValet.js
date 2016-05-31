import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NDExValet from './component/NDExValet'

import fields, * as fieldActions from './store/fields'
import cart, * as cartActions from './store/cart'

//Make these third party deps
import * as luceneActions from './store/lucene'
import * as credentialActions from './store/credentials'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

require("./style/app.scss")

function mapStateToProps(state) {
  return {
    fields: state.valet.fields,
    cart: state.valet.cart,
    creds: state.ndex.credentials,
    lucene: state.ndex.lucene
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fieldActions: bindActionCreators(fieldActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch),
    luceneActions: bindActionCreators(luceneActions, dispatch),
    credActions: bindActionCreators(credentialActions, dispatch)
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
