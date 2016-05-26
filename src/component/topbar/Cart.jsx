import React        from 'react'
import { List }     from 'immutable'
import Dialog       from 'material-ui/Dialog'
import FlatButton   from 'material-ui/FlatButton'
import HighlightOff from 'material-ui/svg-icons/action/highlight-off'

export default class Cart extends React.Component {

  constructor(props) {
    super(props)
  }

  handleRemove(I) {
    const cartList = List(this.props.cart)
    this.props.cartActions.deleteNetwork(cartList.get(I))
  }

  handleClose = () => {
    this.props.handleClose()
  }

  handleLoad = () => {
    this.props.onLoad(this.props.cart.toJS())
  }

  render() {
    const actions = [
      <FlatButton
        label="Load Networks"
        secondary={true}
        onClick={this.handleLoad}
      />,
      <FlatButton
        label="Close Cart"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />
    ]
    const cart = this.props.cart.toJS()
    return (
      <Dialog
        title="Network Cart"
        actions={actions}
        modal={false}
        open={this.props.isOpen}
        onRequestClose={this.handleClose}
        autoScrollBodyContent={true}
      >
        {(cart.length == 0) ?
          <p>Your shopping cart is empty.</p> :
          <table>
            <tbody>
              {cart.map((N,I) => (
               <tr>
                 <td>
                   <FlatButton
                     label={N.name}
                     labelPosition="after"
                     onClick={this.handleRemove.bind(this, I)}
                     icon={<HighlightOff/>}
                   />
                 </td>
               </tr>)
             )}
            </tbody>
          </table>
        }
      </Dialog>
    )
  }

}
