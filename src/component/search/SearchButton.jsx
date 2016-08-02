import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'

export default class SearchButton extends React.Component {

  handleSearch = () => {
    this.props.searchActions.searchBegin()
    this.props.userActions.searchUsers(
      this.props.server.toJS(),
      this.props.fields.get('query')
    )
  }

  render() {
    return (
      <div style={this.props.style}>
        <RaisedButton
          label="Search"
          secondary={true}
          style={{ width: '90%', margin: '5%' }}
          onClick={this.handleSearch}
        />
      </div>
    )
  }

}
