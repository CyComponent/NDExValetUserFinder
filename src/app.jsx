import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './state/store'


ReactDOM.render(
  <Provider store={store()}>
    <NetworkFinder/>
  </Provider>,
  document.getElementById('frame')
)
