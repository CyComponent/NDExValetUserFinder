import React from 'react'
import Paper from 'material-ui/Paper'

import TopBar from './topbar/TopBar'
import Search from './search/Search'
import Result from './result/Result'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class NDExValet extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const theme = getMuiTheme({})
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div style={{ height: '100%', width: '100%'}}>
          <TopBar
            fields={this.props.fields}
            fieldActions={this.props.fieldActions}
            cart={this.props.cart}
            cartActions={this.props.cartActions}
            creds={this.props.creds}
            credActions={this.props.credActions}
            onLoad={this.props.onLoad}
          />
          <div style= {{ height: '94%' }}>
            <Search
              fields={this.props.fields}
              lucene={this.props.lucene}
              fieldActions={this.props.fieldActions}
              luceneActions={this.props.luceneActions}
            />
           <Result
              lucene={this.props.lucene}
              cart={this.props.cart}
              cartActions={this.props.cartActions}
            />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

}
