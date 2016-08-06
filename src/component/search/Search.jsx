import React from 'react'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton'

import { PluginView, SearchButton } from 'cy-ui'

export default class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      query: ""
    }
    this.filters = [].concat(this.props.filters)
  }

  updateQuery = (query) => this.setState({ query })

  render() {
    const page = {
      height: "100%",
      width: "30%",
      float: "left"
    }
    const boundry = {
      height: '80%',
      width: '90%',
      marginLeft: '5%',
      marginRight: '5%'
    }
    const button = {
      height: '10%'
    }
    return (
        <div style={page}>
          <Paper style={boundry} zDepth={2}>
            <PluginView
              query={this.state.query}
              updateQuery={this.updateQuery}
              plugins={this.filters}
            />
          </Paper>
          <SearchButton
            query={this.state.query}
            actions={this.props.userActions}
            style={button}
          />
        </div>
    )
  }

}
