import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NDExValet from './component/NDExValet'

import fields, * as fieldActions from './store/fields'

//Make these third party deps
import * as cartActions from './store/cart'
import * as luceneActions from './store/lucene'
import * as credentialActions from './store/credentials'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

require("./style/app.scss")

function mapStateToProps(state) {
  return {
    fields: state.valet.fields,
    cart: state.ndex.cart,
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

const store = { fields }

export {
  component,
  storeName,
  store
}
