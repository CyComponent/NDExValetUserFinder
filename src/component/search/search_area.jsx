import React from 'react'
import Paper from 'material-ui/lib/paper';

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
      height: '90%',
      width: '90%',
      margin: '5%'
    }
    return (
        <div style={style}>
          <Paper style={boundry} zDepth={1}>
            <Actionbar/>
            <SearchBox/>
          </Paper>
        </div>
    )
  }

}
