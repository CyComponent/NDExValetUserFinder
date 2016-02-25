import React from 'react'
import FontIcon from 'material-ui/lib/font-icon';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';

export default class Actionbar extends React.Component {

  constructor(props) {super(props)}

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true} float="right">
          <FontIcon className="material-icons">file_download</FontIcon>
          <FontIcon className="material-icons">file_upload</FontIcon>
          <FontIcon className="material-icons">perm_identity</FontIcon>
          <FontIcon className="material-icons">share</FontIcon>
        </ToolbarGroup>
      </Toolbar>
    )
  }

}
