import React from 'react'
import FontIcon from 'material-ui/FontIcon';
import { Tab, Tabs } from 'material-ui/Tabs'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

import ListViz from '../vizualization/List'
import Spinner from '../vizualization/Spinner'

export default class Result extends React.Component {

  constructor(props) {
    super(props)
    this.vizualizations = [ListViz]
    this.state = {
      vizualizations: [ListViz],
      currViz: this.props.lucene.isSearching ?
        Spinner.viz :
        this.vizualizations[0].viz
    }
  }

  switchViz(nextViz) {
    this.setState({ currViz: nextViz })
  }

  render() {
    const style = { height: "100%", width: "70%", float: "right" }
    var vizIcons = this.vizualizations.map((V) => {
      <FontIcon
        className="material-icons"
        onClick={this.switchViz.bind(this, V.viz)}
      >
        V.vizName
      </FontIcon>
    })
    return (
      <div style={style}>
        <Tabs>
          <Tab label="Search Results">
            <Toolbar>
              <ToolbarGroup fistChild={true} float="left">
                {vizIcons}
              </ToolbarGroup>
            </Toolbar>
            <div style={{ height: '85%' }}>
              <this.state.currViz
                networkSummaries={this.props.lucene.get('networkSummaries')}
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



