import React        from 'react'
import Popover      from 'material-ui/Popover'
import TextField    from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class Login extends React.Component {

  constructor(props) {
    super(props)
  }

  handleUser = (event) => {
    this.props.fieldActions.updateName(event.target.value)
  }

  handlePass = (event) => {
    this.props.fieldActions.updatePass(event.target.value)
  }

  login = () => {
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
      >
        <div style={{ margin: 40 }}>
          <TextField
            value={this.props.fields.get('name')}
            type="username"
            hintText="Username"
            fullWidth={true}
            onChange={this.handleUser}
          />
          <TextField
            value={this.props.fields.get('pass')}
            type="password"
            hintText="Password"
            onChange={this.handlePass}
            fullWidth={true}
          />
          <RaisedButton
            label="Login"
            secondary={true}
            onClick={this.login}
            style={{ width: "100%" }}
          />
        </div>
      </Popover>
    )
  }

}

