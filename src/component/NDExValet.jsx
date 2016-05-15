import React from 'react'
import Paper from 'material-ui/lib/Paper'

import TopBar from './topbar/Topbar'
import SearchPage from './search/SearchPage'
import ResultPage from './result/ResultPage'

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
         this.props.options.palette ?  getMuiTheme({palette: this.props.options.palette}) : null
        }
      />
        <div style={{ height: 900, width: 1200}}>
          { this.props.options.showTopbar == true ?
              <TopBar
                field={this.props.field}
                fieldAction={this.props.fieldAction}
                cart={this.props.cart}
                cartActions={this.props.cartActions}
                ndexCred={this.props.cred}
              /> : null
          }
          <SearchPage
            field={this.props.field}
            fieldAction={this.props.fieldAction}
            lucene={this.props.lucene}
            luceneActions={this.props.luceneActions}
            plugin={this.props.plugin}
          />
          <Resultpage
            lucene={this.props.lucene}
            cartActions={this.props.cartActions}
          />
        </div>
      </MuiThemeProvider>
    )
  }

}
