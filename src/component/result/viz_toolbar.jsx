import React from 'react'
import FontIcon from 'material-ui/lib/font-icon';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';

export default class VizToolbar extends React.Component {

  constructor(props) {super(props)}

  render() {
    console.log(this)
    return (
        <Toolbar>
          <ToolbarGroup firstChild={true} float="left">
            <FontIcon className="material-icons" onTouchTap={() => {this.props.vizSwitch("stream")}}>view_stream</FontIcon>
          </ToolbarGroup>
        </Toolbar>
    )
  }
}
