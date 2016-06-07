import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

export default class Examples extends React.Component {

  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleTouchTap = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  }

  onClick(value) {
    this.props.fieldActions.updateQuery(value)
    this.props.luceneActions.searchBegin()
    this.props.luceneActions.searchFor(value)
    this.handleRequestClose()
  }

  render() {
    const examples = [
      ["Any mention of melanoma", "melanoma"],
      ["Mention any term in a list: TP53, MDM2, RB1, CDK4", "TP53 MDM2 RB1 CDK4"],
      ["By wildcard: mel*", "mel*"],
      ["Networks with node count between 11 and 79", "nodeCount:[11 TO 79]"],
      ["Use AND for co-occurance", "TP53 AND BARD1"],
      ["Created between 1/1/16 and 4/27/19", "creationTime:[2016-01-01T00:00:01Z TO 2016-04-27T23:59:59Z]"]
    ]
    return (
      <div style={this.props.style}>
        <RaisedButton
          onClick={this.handleTouchTap}
          label="Choose example query"
          style={{ width: '90%', margin: '5%' }}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          onRequestClose={this.handleRequestClose}
        >
          {examples.map(E => (<MenuItem onClick={this.onClick.bind(this, E[1])} primaryText={E[0]}/>))}
        </Popover>
      </div>
    )
  }

}
