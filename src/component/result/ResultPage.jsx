import React from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

import VizToolbar from './viz_toolbar'
import Spinner from './viz/spinner'
import List from './viz/list'
import Grid from './viz/grid'
import Stream from './viz/stream'
import Props from './viz/props'

export default class ResultPage extends React.Component {

  constructor(props) {
    super(props)
  }

  getViz(viz, listname, networks) {
    if (this.props.search.searching && (listname == "Search")) {
      return <Spinner/>
    }
    switch(viz) {
      case "stream":
        return <Stream networks={networks} addToCart={this.props.addToCart}/>
      case "props":
        return <Props networks={networks}/>
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
    if (tabs.length > 0) {
      var page = <Tabs>
                   {tabs}
                 </Tabs>
    }
    return (
      <div style={style}>
          {page}
      </div>
    )
  }

}
