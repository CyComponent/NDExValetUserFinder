import React from 'react'

import { Tab, Tabs } from 'material-ui/Tabs'

import { PluginView } from 'cy-ui'

export default class Result extends React.Component {

  render() {
    const style = {
      height: "100%",
      width: "70%",
      float: "right"
    }
    var { visualizations, ...pluginProps } = this.props
    return (
      <div style={style}>
        <div id="viz">
          <PluginView
            plugins={visualizations}
            {...pluginProps}
          />
        </div>
      </div>
    )
  }

}
