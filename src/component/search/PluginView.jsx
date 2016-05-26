import React from 'react'

export default class PluginView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.plugin)
    return (
      <this.props.plugin {...this.props}/>
    )
  }

}
