import React from 'react'

export default class SearchBox extends React.Component {

  constructor(props) {super(props)}

  render() {
    const style = {
      margin: '2%',
      marginBottom: 0,
      height: '80%',
      width: '95%',
      resize: 'none',
      border: 0,
      fontSize: 20,
      overflowY: 'scroll'
    }
    return (
        <textarea style={style}/>
    )
  }

}
