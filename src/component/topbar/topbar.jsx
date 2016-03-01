import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import Dialog from 'material-ui/lib/dialog'
import NetworkCart from './network_cart'
import RaisedButton from 'material-ui/lib/raised-button'
import FlatButton from 'material-ui/lib/flat-button'
import FontIcon from 'material-ui/lib/font-icon';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

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
    var cartList, cartBody
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
    if (this.props.cart.length == 0) {
      cartBody = "Your shopping cart is empty. Select networks to add them to the cart, then press Begin."
    } else {
      cartList = this.props.cart.map(item => (<TableRow><TableRowColumn>{item.title}</TableRowColumn></TableRow>))
      cartBody = <TableBody>{cartList}</TableBody>
    }
    return (
      <AppBar iconElementRight={
        <FlatButton label="Selected Networks" icon={
          <FontIcon className="material-icons">shopping_cart</FontIcon>
        } onClick={this.toggleCart.bind(this)}/>
      }>
        <Dialog title="Network Shopping Cart" actions={actions} open={this.state.cart_open}>
          {cartBody}
        </Dialog>
      </AppBar>
    )
  }

}

export default TopBar
