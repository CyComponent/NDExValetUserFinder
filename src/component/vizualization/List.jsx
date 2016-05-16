import React from 'react'

class List extends React.Component {

  constructor(props) {super(props)}

  render() {
    const root = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }
    return (
     <div style={root}>
       <p>Hello this is a viz</p>
     </div>
    )
  }

}

const ListViz = {
  vizName: 'reorder',
  viz: List
}

export default ListViz
