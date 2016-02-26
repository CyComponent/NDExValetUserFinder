import React from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

import VizToolbar from './viz_toolbar'
import List from './viz/list'

export default class ResultArea extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  render() {
    const style = {
      height: "100%",
      width: "55%",
      float: "right"
    }
    var tabs = []
    for (var listName in this.props.networkLists) {
      tabs.push(<Tab label={listName} key={listName}>
                  <VizToolbar/>
                  <List/>
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
