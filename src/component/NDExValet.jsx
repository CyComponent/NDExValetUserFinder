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
          getMuiTheme({palette: this.props.options.palette})
        }
      />
        <div style={{ height: 900, width: 1200}}>
          { this.props.options.showTopbar == true ?
              <TopBar
                fields={this.props.fields}
                cart={this.props.cart}
                ndexCred={this.props.cred}
              /> : null
          }
          <SearchPage
            fields={this.props.fields}
            plugin={this.props.plugin}
            search={this.props.search}
          />
          <Resultpage
            viz={this.props.viz}
            search={this.props.search}
          />
        </div>
      </MuiThemeProvider>
    )
  }

}
