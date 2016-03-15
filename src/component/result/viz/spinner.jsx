import React from 'react'
import CircularProgress from 'material-ui/lib/circular-progress'

export default class Spinner extends React.Component {

  constructor(props) {super(props)}

  render() {
    return (
      <div>
        <CircularProgress size={2}/>
      </div>
    )
  }

}
