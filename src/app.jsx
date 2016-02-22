import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './state/store'

import EmptyContainer from './container/empty_container'

ReactDOM.render(
  <Provider store={store()}>
    <EmptyContainer/>
  </Provider>,
  document.getElementById('frame')
)
