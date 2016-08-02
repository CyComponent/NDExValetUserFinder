import React from 'react'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton'

import { PluginView, ExamplePicker } from 'cy-ui'
import SearchButton from './SearchButton'

import TextBox from '../filter/TextBox'

export default class Search extends React.Component {

  constructor(props) {
    super(props)
    this.filters = [TextBox].concat(this.props.filters)
  }


  render() {
    const page = {
      height: "100%",
      width: "30%",
      float: "left"
    }
    const boundry = {
      height: '80%',
      width: '90%',
      marginLeft: '5%',
      marginRight: '5%'
    }
    const button = {
      height: '10%'
    }
    console.log(PluginView)
    return (
        <div style={page}>
          <ExamplePicker
            examples={[
              ["Any mention of melanoma", "melanoma"],
              ["Mention any term in a list: TP53, MDM2, RB1, CDK4", "TP53 MDM2 RB1 CDK4"],
              ["By wildcard: mel*", "mel*"],
              ["Networks with node count between 11 and 79", "nodeCount:[11 TO 79]"],
              ["Use AND for co-occurance", "TP53 AND BARD1"],
              ["Created between 1/1/16 and 4/27/19", "creationTime:[2016-01-01T00:00:01Z TO 2016-04-27T23:59:59Z]"]
            ]}
            fieldActions={this.props.fieldActions}
            luceneActions={this.props.luceneActions}
            server={this.props.server}
            style={button}
          />
          <Paper style={boundry} zDepth={2}>
            <PluginView
              plugins={this.filters}
              fields={this.props.fields}
              fieldActions={this.props.fieldActions}
            />
          </Paper>
          <SearchButton
            fields={this.props.fields}
            luceneActions={this.props.luceneActions}
            searchActions={this.props.searchActions}
            userActions={this.props.userActions}
            server={this.props.server}
            style={button}
          />
        </div>
    )
  }

}
