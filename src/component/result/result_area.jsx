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
    this.state = {
      index: 0
    }
  }

  getViz(viz, listname, networks) {
    console.log("Durka")
    console.log(this.props.isFetching)
    console.log(listname)
    if (this.props.isFetching && (listname == "Search")) {
      return <Spinner/>
    }
    switch(viz) {
      case "list":
        return <List networks={networks} addToCart={this.props.addToCart}/>
      case "stream":
        return <Stream networks={networks}/>
      case "grid":
        return <Grid networks={networks}/>
      default:
        return <List networks={networks}/>
    }
  }

  render() {
    const style = {
      height: "100%",
      width: "55%",
      float: "right"
    }
    const viz = this.getViz(this.props.viz)
    var tabs = []
    for (var listName in this.props.networkLists) {
      tabs.push(<Tab label={listName} key={listName}>
                  <VizToolbar vizSwitch={this.props.vizSwitch}/>
                  {this.getViz(this.props.viz, listName, this.props.networkLists[listName])}
                </Tab>)
    }
    return (
      <div style={style}>
        <Tabs>
          {tabs}
        </Tabs>
      </div>
    )
  }

}
