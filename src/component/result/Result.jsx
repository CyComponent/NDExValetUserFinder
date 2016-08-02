import React from 'react'

import { Tab, Tabs } from 'material-ui/Tabs'

import { PluginView } from 'cy-ui'

export default class Result extends React.Component {

  constructor(props) {
    super(props)
    console.log(this.props.visualizations)
    this.visualizations = [].concat(this.props.visualizations)
  }

  render() {
    const style = {
      height: "100%",
      width: "70%",
      float: "right"
    }
    console.log(PluginView)
    console.log("Users is")
    console.log(this.props.users)
    return (
      <div style={style}>
        <Tabs>
          <Tab label="Search Results">
            <div id="viz">
              <PluginView
                plugins={this.visualizations}
                users={this.props.users}
                cart={this.props.cart}
                cartActions={this.props.cartActions}
              />
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }

}
