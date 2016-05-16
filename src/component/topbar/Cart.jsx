import React        from 'react'
import Dialog       from 'material-ui/Dialog'
import FlatButton   from 'material-ui/FlatButton'
import HighlightOff from 'material-ui/svg-icons/action/highlight-off'

export default class Cart extends React.Component {

  constructor(props) {
    super(props)
  }

  handleRemove(networkSummary) {
    this.props.cartActions.deleteNetwork(networkSummary)
  }

  handleClose = () => {
    this.props.handleClose()
  }

  handleLoad = () => {
    console.log("NDEx Valet Loaded networks!")
    console.log(ths.props.cart)
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
        autoScrollBodyContent={true}
      >
        {(cart.length == 0) ?
          <p>Your shopping cart is empty.</p> :
          <table>
            <tbody>
              {cart.map(n => (
               <tr>
                 <td>
                   <FlatButton
                     label={n.name}
                     labelPosition="after"
                     onClick={this.handleRemove.bind(this, n)}
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
