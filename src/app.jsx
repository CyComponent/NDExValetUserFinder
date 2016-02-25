import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './state/store'
require("./style/app.scss")

import NetworkFinder from './container/network_finder'

ReactDOM.render(
  <Provider store={store()}>
    <NetworkFinder/>
  </Provider>,
  document.getElementById('frame')
)
