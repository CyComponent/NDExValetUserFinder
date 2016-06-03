import React from 'react'

export default class PluginView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const containerStyle = {
      height: '85%',
      overflow: 'scroll'
    }
    return (
      <div style={containerStyle}>
        <this.props.plugin {...this.props}/>
      </div>
    )
  }

}
