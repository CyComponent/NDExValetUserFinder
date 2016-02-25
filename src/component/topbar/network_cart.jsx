import React from 'react'
import Dialog from 'material-ui/lib/dialog'
import FlatButton from 'material-ui/lib/flat-button'

class NetworkCart extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    const actions = [
     <FlatButton
       label="Cancel"
       secondary={true}
       onTouchTap={this.handleClose.bind(this)}
       />,
     <FlatButton
       label="Submit"
       primary={true}
       keyboardFocused={true}
       onTouchTap={this.handleClose.bind(this)}
       />
    ]
    return (
      <FlatButton label="Selected Networks" onTouchTap={this.handleOpen.bind(this)}/>
    )
  }

}

export default NetworkCart
