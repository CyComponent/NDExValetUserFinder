/*
 * Author: Eric Sage <eric.david.sage@gmail.com>
 *
 * The app bar displays a cart icon on the left for opening the network cart
 * and also the logout mechanism on the right of the bar.
 */

import React       from 'react'
import AppBar      from 'material-ui/AppBar'
import FlatButton  from 'material-ui/FlatButton'
import IconButton  from 'material-ui/IconButton';
import CartIcon    from 'material-ui/svg-icons/action/shopping-cart';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import LogoutIcon  from 'material-ui/svg-icons/action/exit-to-app';
import PopOver     from 'material-ui/Popover'
import Dialog      from 'material-ui/Dialog'
import Badge       from 'material-ui/Badge';
import Cart        from './Cart'

export default class TopBar extends React.Component {

  constructor(props) {
    super(props)
    this.handleCart = this.handleCart.bind(this)
    this.state = { cartOpen: false, loginOpen: false, anchorEl: null }
  }

  handleCart() {
    console.log("Handle Cart")
    console.log(this.state)
    this.setState({ cartOpen: !this.state.cartOpen })
  }

  render() {
    return (
      <AppBar
        title={this.props.cart.size}
        iconElementLeft={
          <IconButton onClick={this.handleCart}>
            <CartIcon/>
          </IconButton>
        }
      >
        <Cart
          isOpen={this.state.cartOpen}
          handleClose={this.handleCart}
          cart={this.props.cart}
          cartActions={this.props.cartActions}
          onLoad={this.props.onLoad}
        />
      </AppBar>
    )
  }

}
