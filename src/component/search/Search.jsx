import React from 'react'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton'

import PluginBar from './PluginBar'
import PluginView from './PluginView'

export default class Search extends React.Component {

  constructor(props) {
    super(props)
    this.plugins = [SearchBox] ++ this.props.plugins
    this.state = { selected: this.plugins[0] }
  }

  handleSearch = () => {
    this.props.luceneActions.searchBegin()
    this.props.luceneActions.searchFor(this.props.fields.get('query'))
  }

  selectPlugin(Plugin) {
    this.setState({
      selected: Plugin
    })
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
            <PluginBar
             plugins={plugins}
             selectedPlugin={this.state.selected}
             selectPlugin={this.selectPlugin}

             />
            <PluginView
              plugin={this.state.selected}
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
