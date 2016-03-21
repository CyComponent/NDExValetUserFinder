import React from 'react'
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button'

import Actionbar from './action_bar'
import SearchBox from './search_box'

export default class SearchArea extends React.Component {

  constructor(props) {super(props)}

  handleSearch() {
    this.props.addResults([])
    this.props.startSearch()
    //window.fetch('http://54.219.139.91:8082/search?term=""', { mode: 'no-cors' }).then((R) => {
    var URL = 'http://54.219.139.91:8081/search?term=""'
    window.fetch('http://54.219.139.91:8081/search?term=""', {mode: 'cors', method: 'GET'}).then((R) => {
      return R.text()
    }).then((D) => { console.log(D) })
    var xhr = new XMLHttpRequest()
    xhr.onload = function() {
      console.log(xhr.status)
      console.log(xhr.responseText)
    }
    xhr.open('GET', URL)
    xhr.send()
  }

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
          <Paper style={boundry} zDepth={2}>
            <Actionbar/>
            <SearchBox query={this.props.query} updateQuery={this.props.updateQuery}/>
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
