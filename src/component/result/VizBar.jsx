import React from 'react'
import FontIcon from 'material-ui/lib/font-icon';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';

export default class VizBar extends React.Component {

  constructor(props) {super(props)}

  render() {
    return (
        <Toolbar>
          <ToolbarGroup firstChild={true} float="left">
            <FontIcon className="material-icons" onClick={() => {this.props.vizSwitch("stream")}}>view_stream</FontIcon>
            <FontIcon className="material-icons" onClick={() => {this.props.vizSwitch("props")}}>receipt</FontIcon>
          </ToolbarGroup>
        </Toolbar>
    )
  }
}
