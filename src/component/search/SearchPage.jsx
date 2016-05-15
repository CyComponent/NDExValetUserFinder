import React from 'react'
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button'

import PluginBar from './action_bar'
import SearchBox from './search_box'

export default class SearchPage extends React.Component {

  constructor(props) {super(props)}

  handleSearch() {
    this.props.luceneActions.searchBegin()
    this.props.searchFor(this.props.fields.query)
  }

  render() {
    const page = {
      height: "100%",
      width: "45%",
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
            <PluginBar plugin={this.props.plugin}/>
            <SearchBox query={this.props.field.query} updateQuery={this.props.fieldAction.updateQuery}/>
          </Paper>
          <RaisedButton
            onClick={this.handleSearch.bind(this)}
            label="Search"
            primary={true}
            style={searchButton}/>
        </div>
    )
  }

}
