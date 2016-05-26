import React        from 'react'
import Popover      from 'material-ui/Popover'
import TextField    from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class Login extends React.Component {

  constructor(props) {
    super(props)
  }

  handleUser(event) {
    console.log("Event was")
    console.log(event)
    this.props.fieldActions.updateName(event.target.value)
  }

  handlePass(event) {
    this.props.fieldActions.updatePass(event.target.value)
  }

  login() {
    console.log(this.props.fields)
    this.props.credActions.login(
      this.props.fields.get('name'),
      this.props.fields.get('pass')
    )
    this.props.fieldActions.updateName("")
    this.props.fieldActions.updatePass("")
    this.props.handleClose()
  }

  render() {
    return (
      <Popover
       open={this.props.isOpen}
       anchorEl={this.props.anchorEl}
       onRequestClose={this.props.handleClose}
      >
        <div style={{ margin: 30 }}>
          <TextField
            value={this.props.fields.name}
            type="username"
            hintText="Username"
            fullWidth={true}
            onChange={this.handleUser.bind(this)}
          />
          <TextField
            value={this.props.fields.pass}
            type="password"
            hintText="Password"
            onChange={this.handlePass.bind(this)}
            fullWidth={true}
          />
          <RaisedButton
            label="Login"
            secondary={true}
            onClick={this.login.bind(this)}
            style={{ width: "100%" }}
          />
        </div>
      </Popover>
    )
  }

}

