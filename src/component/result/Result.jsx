import React from 'react'

import { Tab, Tabs } from 'material-ui/Tabs'

import PluginViewer from '../plugin/PluginViewer'

import TableViz from '../vizualization/Table'
import GridImageViz from '../vizualization/GridImage'
import ImageViz from '../vizualization/Image'

export default class Result extends React.Component {

  constructor(props) {
    super(props)
    this.vizualizations = [TableViz, GridImageViz, ImageViz].concat(this.props.vizualizations)
  }

  render() {
    const style = {
      height: "100%",
      width: "70%",
      float: "right"
    }
    return (
      <div style={style}>
        <Tabs>
          <Tab label="Search Results">
            <PluginViewer
              plugins={this.vizualizations}
              networkSummaries={this.props.lucene.get('networkSummaries')}
              cart={this.props.cart}
              cartActions={this.props.cartActions}
            />
          </Tab>
        </Tabs>
      </div>
    )
  }

}



