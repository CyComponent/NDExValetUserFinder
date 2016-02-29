import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import Dialog from 'material-ui/lib/dialog'
import NetworkCart from './network_cart'
import RaisedButton from 'material-ui/lib/raised-button'
import FlatButton from 'material-ui/lib/flat-button'
import FontIcon from 'material-ui/lib/font-icon';

class TopBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cart_open: false
    }
  }

  toggleCart() {
    console.log("called")
    this.setState({cart_open: !this.state.cart_open})
  }

  render() {
    const actions = [
      <FlatButton
        label="Close Cart"
        secondary={true}
        onTouchTap={this.toggleCart.bind(this)}
      />,
      <FlatButton
        label="Begin"
        primary={true}
        onTouchTap={console.log("Begin")}
      />
    ]
    return (
      <AppBar iconElementRight={
        <FlatButton label="Selected Networks" icon={
          <FontIcon className="material-icons">shopping_cart</FontIcon>
        } onClick={this.toggleCart.bind(this)}/>
      }>
        <Dialog title="Network Shopping Cart" actions={actions} open={this.state.cart_open}>
          Your shopping cart is empty. Try adding a network.
        </Dialog>
      </AppBar>
    )
  }

}

export default TopBar
