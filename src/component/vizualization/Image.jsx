
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

class Image extends React.Component {

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

  render() {
    const networkSummaries = this.props.networkSummaries.toJS()
    var networks = networkSummaries.map(N => {
      N.modificationTime = this.time(N.modificationTime)
      N.creationTime = this.time(N.creationTime)
      return N
    })
    return (
     <div>
       {networks.map(N => (
          <Card style={{ margin: "20"}}>
            <CardHeader
              title={"Created on " + N.creationTime}
              subtitle={"Modified on " + N.modificationTime}
            />
            <CardMedia/>
            <CardTitle title={N.name} subtitle={N.owner}/>
            <CardText>{N.description}</CardText>
            <CardActions>
              <RaisedButton
                label="Add to Cart"
                primary={true}
                onClick={this.handleSelection.bind(this, networks, N)}
              />
            </CardActions>
          </Card>
          )
        )}
      </div>
    )
  }
}

const ImageViz = {
  iconName: 'view_stream',
  plugin: Image
}

export default ImageViz
