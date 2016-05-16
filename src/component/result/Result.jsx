import React from 'react'
import FontIcon from 'material-ui/FontIcon';
import { Tab, Tabs } from 'material-ui/Tabs'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

export default class Result extends React.Component {

  constructor(props) {
    super(props)
      this.state = this.props.lucene.isSearching ?
        this.state = Spinner.viz :
        this.props.children.vizualizations[0].viz
  }

  switchViz(nextViz) {
    this.replaceState(nextViz)
  }

  render() {
    const style = { height: "100%", width: "55%", float: "right" }
    var vizIcons = this.props.children.vizualizations.map((V) => {
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
          <this.state networkSummaries={this.props.lucene.networkSummaries} cartActions={this.props.cartActions}/>
        </Tab>
      </div>
    )
  }

}
