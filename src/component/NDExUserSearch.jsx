import React from 'react'
import Paper from 'material-ui/Paper'

import Search from './search/Search'
import Result from './result/Result'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class NDExUserSearch extends React.Component {

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
            <Search
              filters={this.props.filters}
              userActions={this.props.userActions}
            />
           <Result
              visualizations={this.props.visualizations}
              users={this.props.users}
            />
        </div>
      </MuiThemeProvider>
    )
  }

}
