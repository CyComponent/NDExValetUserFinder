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

  getViz(viz) {
    console.log("Viz was " + viz)
    switch(viz) {
      case "list":
        return <List/>
      case "grid":
        return <Grid/>
      default:
        return <List/>
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
                  {viz}
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
