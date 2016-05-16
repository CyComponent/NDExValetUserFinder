import React from 'react'
import FontIcon from 'material-ui/FontIcon';
import { Tab, Tabs } from 'material-ui/Tabs'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

import ListViz from '../vizualization/List'
import Spinner from '../vizualization/Spinner'

export default class Result extends React.Component {

  constructor(props) {
    super(props)
    this.switchViz(nextViz) = this.switchViz.bind(this, nextViz)
    this.vizualizations = [ListViz]
    this.props.lucene.isSearching ?
      Spinner.viz :
      this.vizualizations[0].viz
    this.state = { viz: this.vizualizations[0].viz }
  }

  switchViz(nextViz) {
    this.setState({ viz: nextViz })
  }

  render() {
    const style = { height: "100%", width: "55%", float: "right" }
    var vizIcons = this.vizualizations.map((V) => {
      <FontIcon className="material-icons" onClick={this.switchViz(V.viz)}>
        V.vizName
      </FontIcon>
    })
    return (
      <div style={style}>
        <Tab label="Search Results" key={0}>
          <Toolbar>
            <ToolbarGroup fistChild={true} float="left">
              {vizIcons}
            </ToolbarGroup>
          </Toolbar>
          <this.state.viz networkSummaries={this.props.lucene.networkSummaries} cartActions={this.props.cartActions}/>
        </Tab>
      </div>
    )
  }

}
