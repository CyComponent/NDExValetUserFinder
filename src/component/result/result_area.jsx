import React from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

import VizToolbar from './viz_toolbar'
import List from './viz/list'
import Grid from './viz/grid'

export default class ResultArea extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  getViz(viz, networks) {
    console.log("Viz was " + viz)
    console.log("networks was")
    console.log(networks)
    switch(viz) {
      case "list":
        return <List networks={networks}/>
      case "stream":
        return <Grid networks={networks}/>
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
                  {this.getViz(this.props.viz, this.props.networkLists[listName])}
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
