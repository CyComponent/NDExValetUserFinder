import React from 'react'

export default class PluginView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const containerStyle = {
      height: '95%',
      overflow: 'hidden'
    }
    return (
      <div style={containerStyle}>
        <this.props.plugin {...this.props}/>
      </div>
    )
  }

}
