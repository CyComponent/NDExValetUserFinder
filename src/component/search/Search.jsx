import React from 'react'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton'

import PluginViewer from '../plugin/PluginViewer'

import TextBox from '../filter/TextBox'
import NetworkForm from '../filter/NetworkForm'

export default class Search extends React.Component {

  constructor(props) {
    super(props)
    this.filters = [TextBox, NetworkForm].concat(this.props.filters)
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
      margin: '5%',
      marginBottom: '4%'
    }
    const searchButton = {
      width: '90%',
      margin: '5%',
      marginTop: 0
    }
    return (
        <div style={page}>
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
            style={searchButton}
            onClick={this.handleSearch}
          />
        </div>
    )
  }

}
