import React        from 'react'
import Popover      from 'material-ui/Popover'
import TextField    from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class Login extends React.Component {

  constructor(props) {
    super(props)
  }

  handleUser = (event) => {
    this.props.fields.updateUser(event.target.value)
  }

  handlePass = (event) => {
    this.props.fields.updatePass(event.target.value)
  }

  login = () => {
    this.props.credActions.login(
      this.props.fields.user,
      this.props.fields.pass
    )
  }

  render() {
    return (
      <Popover
       open={this.props.isOpen}
       anchorEl={this.props.anchorEl}
      >
        <TextField
          value={this.props.fields.user}
          type="username"
          hintText="Username"
          fullWidth={true}
          onChange={this.handleUser}
        />
        <TextField
          value={this.props.fields.pass}
          type="password"
          hintText="Password"
          onChange={this.handlePass}
          fullWidth={true}
        />
        <RaisedButton
          label="Login"
          primary={true}
          onClick={this.login}
          style={{ width: "100%" }}
        />
      </Popover>
    )
  }

}

