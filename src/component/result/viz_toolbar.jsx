import React from 'react'
import FontIcon from 'material-ui/lib/font-icon';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';

export default class VizToolbar extends React.Component {

  constructor(props) {super(props)}

  handleVizSwitch(Viz) {
    console.log("Viz switch")
  }

  render() {
    console.log(this)
    return (
        <Toolbar>
          <ToolbarGroup firstChild={true} float="left">
            <FontIcon className="material-icons" onTouchTap={() => {this.props.vizSwitch("list")}}>format_align_justify</FontIcon>
            <FontIcon className="material-icons" onTouchTap={() => {this.props.vizSwitch("stream")}}>view_stream</FontIcon>
            <FontIcon className="material-icons" onTouchTap={() => {this.props.vizSwitch("grid")}}>view_module</FontIcon>
          </ToolbarGroup>
        </Toolbar>
    )
  }
}
      //      <FontIcon className="material-icons" onTouchTap={() => { console.log(this) }}>format_align_justify</FontIcon>
