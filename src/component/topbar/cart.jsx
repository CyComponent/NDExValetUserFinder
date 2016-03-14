import React from 'react'
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

export default class Cart extends React.Component {

  constructor(props) {
    super(props)
  }

  handleClick(item) {
    console.log(this)
    console.log(item)
    this.props.removeFromCart(item)
  }

  render() {
    var cartList, cartBody
    if (this.props.cart.length == 0) {
      cartBody = "Your shopping cart is empty. Select networks to add them to the cart, then press Begin."
    } else {
      cartList = this.props.cart.map(item => (<tr onClick={this.handleClick.bind(this, item)}>
                                                <td>
                                                  {item.title}
                                                </td>
                                              </tr>))
    }
    return (
        <table>
          <tbody>
            {cartList}
          </tbody>
        </table>

    )
  }

}
