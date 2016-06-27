import React from 'react'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton'

import Examples from './Examples'
import PluginViewer from '../plugin/PluginViewer'
import SearchButton from './SearchButton'

import TextBox from '../filter/TextBox'

export default class Search extends React.Component {

  constructor(props) {
    super(props)
    this.filters = [TextBox].concat(this.props.filters)
  }


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
          <Examples
            fieldActions={this.props.fieldActions}
            luceneActions={this.props.luceneActions}
            server={this.props.server}
            style={button}
          />
          <Paper style={boundry} zDepth={2}>
            <PluginViewer
              plugins={this.filters}
              fields={this.props.fields}
              fieldActions={this.props.fieldActions}
            />
          </Paper>
          <SearchButton
            fields={this.props.fields}
            luceneActions={this.props.luceneActions}
            server={this.props.server}
            style={button}
          />
        </div>
    )
  }

}
