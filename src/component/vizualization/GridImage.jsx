
import {GridList, GridTile} from 'material-ui/GridList'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import React from 'react'

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card'

import RaisedButton from 'material-ui/RaisedButton'

class Grid extends React.Component {

  constructor(props) {
    super(props)
    this.state = {value: "name"}
  }

  time(T) {
    var d = new Date(0)
    d.setUTCSeconds(T/1000.0)
    return d.toLocaleDateString()
  }

  handleSelection(NWS, NW) {
    const index = NWS.indexOf(NW)
    const network = this.props.networkSummaries.get(index)
    this.props.cartActions.addNetwork(network)
  }

  sort(sortOn, networks) {
    networks.sort(function(a, b) {
      return a[sortOn] > b[sortOn]
    })
    console.log("sorted")
    console.log(networks)
    return networks
  }

  setSortOn(value) {
    this.setState({value})
  }

  render() {
    const cardStackStyle = {
      height: '95%'
    }
    var networkSummaries = this.props.networkSummaries.toJS()
    var networks = networkSummaries.map(N => {
      N.modificationTime = this.time(N.modificationTime)
      N.creationTime = this.time(N.creationTime)
      return N
    })
    var sortedNetworks = this.sort(this.state.value, networks)
    return (
     <div style = {cardStackStyle}>
       <div>
         <RaisedButton
           label="Sort by name"
           secondary={true}
           onClick={this.setSortOn.bind(this, "name")}
         />
         <RaisedButton
           label="Sort by owner"
           secondary={true}
           onClick={this.setSortOn.bind(this, "owner")}
         />
         <RaisedButton
           label="Sort by visibility"
           secondary={true}
           onClick={this.setSortOn.bind(this, "visibility")}
         />
       </div>
       <div style={{ overflow: 'scroll', height: '95%' }}>
           <GridList cellHeight={650}>
           {sortedNetworks.map(N => (
              <GridTile key={N.name}>
                <Card style={{ margin: "20px" }}>
                  <CardHeader
                    title={"Created on " + N.creationTime}
                    subtitle={"Modified on " + N.modificationTime}
                  />
                  <CardMedia>
                  <img
                    src={"http://52.35.119.46:8080/" + N.externalId + ".png"}
                    style={{ width: '50%', height: '50%', marginLeft: '25%', minWidth: 0 }}
                  />
                  </CardMedia>
                  <CardTitle title={N.name} subtitle={N.owner}/>
                  <CardActions>
                    <RaisedButton
                      label="Add to Cart"
                      primary={true}
                      onClick={this.handleSelection.bind(this, networks, N)}
                    />
                  </CardActions>
                </Card>
              </GridTile>
              )
            )}
          </GridList>
        </div>
      </div>
    )
  }
}

const GridImageViz = {
  iconName: 'view_module',
  plugin: Grid
}

export default GridImageViz
