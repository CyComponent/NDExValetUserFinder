import React from 'react'

export default class SearchBox extends React.Component {

  constructor(props) {super(props)}

  handleChange(event) {
    console.log(this)
    console.log(event)
    this.props.updateQuery(event.target.value)
    window.fetch
  }

  render() {
    const style = {
      margin: '2%',
      marginBottom: 0,
      height: '80%',
      width: '95%',
      resize: 'none',
      border: 0,
      fontSize: 20,
      overflowY: 'auto'
    }
    return (
        <textarea style={style} value={this.props.query} onChange={this.handleChange.bind(this)}/>
    )
  }

}
