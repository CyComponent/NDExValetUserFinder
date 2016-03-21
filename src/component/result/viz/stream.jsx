import React from 'react'
import Paper from 'material-ui/lib/paper';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import Checkbox from 'material-ui/lib/checkbox';
import RaisedButton from 'material-ui/lib/raised-button';
import Divider from 'material-ui/lib/divider';

export default class Stream extends React.Component {

  constructor(props) {super(props)}

  add(Network) {
    this.props.addToCart(Network)
  }

  render() {
    const root = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }
    const gridList = {
      width: '100%',
      height: '525',
      overflowY: 'auto',
      margin: 2
    }
    const stream = this.props.networks.map((N) => (<Paper zDepth={1} style={{ width: '96%', marginTop: '10px' }}>
                                                     <Toolbar>
                                                       <ToolbarGroup float="left">
                                                         <ToolbarTitle text={N.name}/>
                                                       </ToolbarGroup>
                                                       <ToolbarGroup float="right">
                                                         <RaisedButton label="On NDEx" primary={true} linkButton={true} href={N.uri} style={{
                                                           marginRight: 0
                                                         }}/>
                                                         <RaisedButton label="Add to Cart" onClick={this.add.bind(this, N)} primary={false} style={{
                                                           marginRight: 0
                                                         }}/>
                                                       </ToolbarGroup>
                                                     </Toolbar>
                                                   </Paper>))
    console.log(stream)
    return (
      <div style={root}>
        {stream}
      </div>
    )
  }

}
