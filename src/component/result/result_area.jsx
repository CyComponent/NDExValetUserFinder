import React from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

import VizToolbar from './viz_toolbar'
import Grid from './viz/grid'

export default class ResultArea extends React.Component {

  constructor(props) {super(props)}

  render() {
    const style = {
      height: "100%",
      width: "55%",
      float: "right"
    }
    return (
        <div style={style}>
        <Tabs>
          <Tab label="List One">
            <VizToolbar/>
            <Grid/>
          </Tab>
          <Tab label="List Two">
          </Tab>
          <Tab label="List Three">
          </Tab>
          <Tab label="List Four">
          </Tab>
          <Tab label="List Five">
          </Tab>
          <Tab label="List Six">
          </Tab>
        </Tabs>
        </div>
    )
  }

}
