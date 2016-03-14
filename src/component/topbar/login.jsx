import React from 'react'
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button'

export default class Login extends React.Component {

  constructor(props) {
    super(props)
  }

  handleUserChange(event) {
    this.props.updateUser(event.target.value)
  }

  handlePassChange(event) {
    this.props.updatePass(event.target.value)
  }

  render() {
    var loginName = "Login"
    return (
      <div>
      <TextField value={this.props.user}
        onChange={this.handleUserChange.bind(this)}
        fullWidth={true}
        type="username"
        hintText="Username"
      />
      <TextField value={this.props.pass}
        onChange={this.handlePassChange.bind(this)}
        fullWidth={true}
        type="password"
        hintText="Password"
      />
      <RaisedButton label="Login" primary={true} style={{ width: "100%" }}/>
      </div>
    )
  }

}

