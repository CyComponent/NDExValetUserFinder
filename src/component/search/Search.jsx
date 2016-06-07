import React from 'react'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton'

import Examples from './Examples'

import PluginViewer from '../plugin/PluginViewer'

import TextBox from '../filter/TextBox'

export default class Search extends React.Component {

  constructor(props) {
    super(props)
    this.filters = [TextBox].concat(this.props.filters)
  }

  handleSearch = () => {
    this.props.luceneActions.searchBegin()
    this.props.luceneActions.searchFor(this.props.fields.get('query'))
  }

  render() {
    const page = {
      height: "100%",
      width: "30%",
      float: "left"
    }
    const boundry = {
      height: '85%',
      width: '90%',
      marginLeft: '5%',
      marginRight: '5%'
    }
    const button = {
      width: '90%',
      margin: '5%'
    }
    return (
        <div style={page}>
          <Examples
            fieldActions={this.props.fieldActions}
            luceneActions={this.props.luceneActions}
            style={button}
          />
          <Paper style={boundry} zDepth={2}>
            <PluginViewer
              plugins={this.filters}
              fields={this.props.fields}
              fieldActions={this.props.fieldActions}
            />
          </Paper>
          <RaisedButton
            label="Search"
            secondary={true}
            style={button}
            onClick={this.handleSearch}
          />
        </div>
    )
  }

}
