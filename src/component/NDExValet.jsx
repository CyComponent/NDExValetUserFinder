import React from 'react'
import Paper from 'material-ui/Paper'

import Search from './search/Search'
import Result from './result/Result'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class NDExValet extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MuiThemeProvider
        muiTheme={
         this.props.palette ? getMuiTheme({palette: this.props.options.palette}) : null
        }
      >
        <div style={{ height: 900, width: 1200}}>
         /* { this.props.showTopbar == true ?
              <TopBar
                field={this.props.field}
                fieldAction={this.props.fieldAction}
                cart={this.props.cart}
                cartActions={this.props.cartActions}
                ndexCred={this.props.cred}
              /> : null
          }*/
          <Search
            field={this.props.field}
            fieldAction={this.props.fieldAction}
            lucene={this.props.lucene}
            luceneActions={this.props.luceneActions}
          />
          <Result
            lucene={this.props.lucene}
            cartActions={this.props.cartActions}
          />
        </div>
      </MuiThemeProvider>
    )
  }

}
