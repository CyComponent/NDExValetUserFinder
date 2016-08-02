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
    visualizations: [],
    onLoad: () => {}
  }

  render() {
    const theme = getMuiTheme(this.props.theme)
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div style={this.props.style}>
          <div>
            <TopBar
              fields={this.props.fields}
              fieldActions={this.props.fieldActions}
              cart={this.props.cart}
              cartActions={this.props.cartActions}
              onLoad={this.props.onLoad}
            />
          </div>
          <div id="content">
            <Search
              filters={this.props.filters}
              fields={this.props.fields}
              lucene={this.props.lucene}
              server={this.props.server}
              fieldActions={this.props.fieldActions}
              luceneActions={this.props.luceneActions}
              userActions={this.props.userActions}
              searchActions={this.props.searchActions}
            />
           <Result
              visualizations={this.props.visualizations}
              lucene={this.props.lucene}
              users={this.props.users}
              cart={this.props.cart}
              cartActions={this.props.cartActions}
            />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

}
