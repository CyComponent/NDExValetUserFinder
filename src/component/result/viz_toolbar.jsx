import React from 'react'
import FontIcon from 'material-ui/lib/font-icon';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';

export default class VizToolbar extends React.Component {

  constructor(props) {super(props)}

  render() {
    return (
        <Toolbar>
          <ToolbarGroup firstChild={true} float="left">
            <FontIcon className="material-icons">format_align_justify</FontIcon>
            <FontIcon className="material-icons">view_module</FontIcon>
          </ToolbarGroup>
        </Toolbar>
    )
  }
}
