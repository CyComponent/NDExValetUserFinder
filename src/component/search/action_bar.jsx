import React from 'react'
import FontIcon from 'material-ui/lib/font-icon';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';

export default class Actionbar extends React.Component {

  constructor(props) {super(props)}

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true} float="left">
        </ToolbarGroup>
        <ToolbarGroup firstChild={true} float="right">
        </ToolbarGroup>
      </Toolbar>
    )
  }

}
