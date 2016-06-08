import React from 'react'
import Paper from 'material-ui/Paper'

import TopBar from './topbar/TopBar'
import Search from './search/Search'
import Result from './result/Result'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class NDExValet extends React.Component {

  static defaultProps = {
    style: {
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    },
    theme: {},
    filters: [],
    vizualizations: [],
    onLoad: () => {}
  }

  render() {
    const theme = getMuiTheme(this.props.theme)
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div style={this.props.style}>
          <div style= {{ height: '6%' }}>
            <TopBar
              fields={this.props.fields}
              fieldActions={this.props.fieldActions}
              cart={this.props.cart}
              cartActions={this.props.cartActions}
              creds={this.props.creds}
              credActions={this.props.credActions}
              onLoad={this.props.onLoad}
            />
          </div>
          <div style= {{ height: '94%' }}>
            <Search
              filters={this.props.filters}
              fields={this.props.fields}
              lucene={this.props.lucene}
              fieldActions={this.props.fieldActions}
              luceneActions={this.props.luceneActions}
            />
           <Result
              vizualizations={this.props.vizualizations}
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
