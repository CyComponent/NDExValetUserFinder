import React from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

import VizToolbar from './viz_toolbar'
import Spinner from './viz/spinner'
import List from './viz/list'
import Grid from './viz/grid'
import Stream from './viz/stream'

export default class ResultArea extends React.Component {

  constructor(props) {
    super(props)
  }

  getViz(viz, listname, networks) {
    if (this.props.isSearching && (listname == "Search")) {
      return <Spinner/>
    }
    switch(viz) {
      case "list":
        return <List networks={networks} addToCart={this.props.addToCart}/>
      case "stream":
        return <Stream networks={networks} addToCart={this.props.addToCart}/>
      case "grid":
        return <Grid networks={networks}/>
    }
  }

  render() {
    const style = {
      height: "100%",
      width: "55%",
      float: "right"
    }
    var tabs = []
    this.props.networkLists.forEach((list, name) => {
      tabs.push(<Tab label={name} key={name}>
        <VizToolbar vizSwitch={this.props.vizSwitch}/>
        {this.getViz(this.props.viz, name, list)}
      </Tab>)
    })
    return (
      <div style={style}>
        <Tabs>
          {tabs}
        </Tabs>
      </div>
    )
  }

}
