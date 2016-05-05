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
    window.fetch('http://dev2.ndexbio.org/rest/network/search/0/50',
        { mode: 'cors',
          method: 'post',
          headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body: JSON.stringify({searchString: this.props.query})
        }).then((R) => {
      return R.json()
    }).then((D) => {
      this.props.endSearch()
      this.props.addResults(D)
    })
  }

  render() {
    const style = {
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
