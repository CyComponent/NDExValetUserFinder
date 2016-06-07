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
import Login       from './Login'

export default class TopBar extends React.Component {

  constructor(props) {
    super(props)
    this.handleCart = this.handleCart.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.state = { cartOpen: false, loginOpen: false, anchorEl: null }
  }

  handleCart() {
    console.log("Handle Cart")
    console.log(this.state)
    this.setState({ cartOpen: !this.state.cartOpen })
  }

  handleLogin(event) {
    console.log("Handle Login")
    console.log(this.state)
    this.setState({
      loginOpen: !this.state.loginOpen,
      anchorEl: event ? event.currentTarget : null
    })
  }

  handleLogout = () => {
    this.props.credActions.logout()
  }

  getCredButton(loggedIn) {
    return loggedIn ? {
      label: this.props.creds.get('name'),
      click: this.handleLogout,
      icon: LogoutIcon
    } : {
      label: "Login",
      click: this.handleLogin,
      icon: AccountIcon
    }
  }

  render() {
    const credButton = this.getCredButton(this.props.creds.get('loggedIn'))
    return (
      <AppBar
        title={this.props.cart.size}
        style={{ height: '100%' }}
        iconElementLeft={
          <IconButton onClick={this.handleCart}>
            <CartIcon/>
          </IconButton>
        }
        iconElementRight={
          <FlatButton
            label={credButton.label}
            labelPosition="after"
            onClick={credButton.click}
            icon={<credButton.icon/>}
          />
        }
      >
        <Cart
          isOpen={this.state.cartOpen}
          handleClose={this.handleCart}
          cart={this.props.cart}
          cartActions={this.props.cartActions}
          onLoad={this.props.onLoad}
        />
        <Login
          isOpen={this.state.loginOpen}
          handleClose={this.handleLogin}
          anchorEl={this.state.anchorEl}
          fields={this.props.fields}
          fieldActions={this.props.fieldActions}
          creds={this.props.creds}
          credActions={this.props.credActions}
        />
      </AppBar>
    )
  }

}
