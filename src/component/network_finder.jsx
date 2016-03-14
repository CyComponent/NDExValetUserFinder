import React from 'react'
import Paper from 'material-ui/lib/paper'

import TopBar from './topbar/topbar'
import SearchArea from './search/search_area'
import ResultArea from './result/result_area'

export default class NetworkFinder extends React.Component {

  constructor(props) {super(props)}

  render() {
    console.log(this)
    const style = {
      height: 700,
      width: "90%"
    }
    return (
      <Paper style={style} zDepth={5}>
        <TopBar
          cart={this.props.cart}
          user={this.props.user}
          pass={this.props.pass}
          updateUser={this.props.updateUser}
          updatePass={this.props.updatePass}
          removeFromCart={this.props.removeFromCart}/>
        <SearchArea updateQuery={this.props.updateQuery} query={this.props.query}/>
        <ResultArea networkLists={this.props.networkLists} cart={this.props.cart} addToCart={this.props.addToCart} vizSwitch={this.props.vizSwitch} viz={this.props.viz}/>
      </Paper>
    )
  }

}
