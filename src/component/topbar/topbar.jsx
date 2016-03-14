import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import FlatButton from 'material-ui/lib/flat-button'
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import PopOver from 'material-ui/lib/popover/popover'
import Dialog from 'material-ui/lib/dialog'
import Cart from './cart'
import Login from './login'

export default class TopBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cart_open: false,
      login_open: false
    }
  }

  toggleCart() {
    this.setState({
      cart_open: !this.state.cart_open,
      login_open: this.state.login_open
    })
  }

  openLogin(event) {
    console.log("Opened")
    this.setState({
      cart_open: this.state.cart_open,
      login_open: true,
      anchor: event.currentTarget
    })
  }

  closeLogin() {
    this.setState({
      cart_open: this.state.cart_open,
      login_open: false
    })
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
      />
    ]
    return (
      <AppBar
        title="Network Cart"
        onTitleTouchTap={this.toggleCart.bind(this)}
        iconElementLeft={
          <IconButton>
              <FontIcon
                className="material-icons"
                onClick={this.toggleCart.bind(this)}
               >
                shopping_cart
              </FontIcon>
          </IconButton>
        }
        iconElementRight={
          <FlatButton
            label="Login"
            labelPosition="after"
            onClick={this.openLogin.bind(this)}
            icon={
              <FontIcon className="material-icons">
                account_circle
              </FontIcon>
            }
          />
        }
      >
        <Dialog
          title="Network Shopping Cart"
          actions={actions}
          open={this.state.cart_open}
        >
          <Cart
            removeFromCart={this.props.removeFromCart}
            cart={this.props.cart}
          />
        </Dialog>
        <PopOver
          open={this.state.login_open}
          anchorEl={this.state.anchor}
          onRequestClose={this.closeLogin.bind(this)}
        >
          <Login
            user={this.props.user}
            pass={this.props.pass}
            updateUser={this.props.updateUser}
            updatePass={this.props.updatePass}
          />
        </PopOver>
      </AppBar>
    )
  }

}
