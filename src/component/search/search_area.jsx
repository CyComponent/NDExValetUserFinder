import React from 'react'
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button'

import Actionbar from './action_bar'
import SearchBox from './search_box'

export default class SearchArea extends React.Component {

  constructor(props) {super(props)}

  render() {
    const style = {
      height: "90%",
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
        <div style={style}>
          <Paper style={boundry} zDepth={1}>
            <Actionbar/>
            <SearchBox query={this.props.query} updateQuery={this.props.updateQuery}/>
          </Paper>
          <RaisedButton label="Search" primary={true} style={searchButton}/>
        </div>
    )
  }

}
