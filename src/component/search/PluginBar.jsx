import React from 'react'
import { Toolbar, ToobarGroup } from 'material-ui/Toolbar';

export default class PluginBar extends React.Component {

  constructor(props) {
    super(props)
  }

  isSelected(P) {
    if (P == this.props.selectedPlugin) {
      return {backgroundColor: 'black'}
    } else {
      return {}
    }
  }

  handleSelect(P) {
    this.props.selectPlugin(P)
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          {this.props.plugins.map(P => (
            <FontIcon
              className='material-icons'
              style={this.isSelected(P)}
              onClick={this.handleSelect.bind(this, P)}
            >
              {P.iconName}
            </FontIcon>)
          )}
        </ToolbarGroup>
      </Toolbar>
    )
  }

}
