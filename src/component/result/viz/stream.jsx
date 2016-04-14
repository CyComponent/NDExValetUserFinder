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
      justifyContent: 'space-around',
      height: 750,
      overflow: 'scroll'
    }
    const gridList = {
      width: '100%',
      height: '525',
      overflowY: 'auto',
      margin: 2
    }
    const stream = this.props.networks.map((N) => (<Paper zDepth={1} style={{ width: '96%', marginTop: '10px' }}>
                                                     <Toolbar>
                                                       <ToolbarGroup float="right">
                                                         <RaisedButton label="On NDEx" primary={true} linkButton={true}
                                                         href={"http://dev2.ndexbio.org/#/network/" + N.externalId}
                                                         style={{
                                                           marginRight: 0
                                                         }}/>
                                                       </ToolbarGroup>
                                                     </Toolbar>
                                                     <table style={{width: '100%'}}>
                                                       <tbody>
                                                         <tr>
                                                           <td><p>Name:</p></td>
                                                           <td><p>{N.name}</p></td>
                                                         </tr>
                                                          <tr>
                                                           <td><p>Owner:</p></td>
                                                           <td><p>{N.owner}</p></td>
                                                         </tr>
                                                         <tr>
                                                           <td><p>Edges:</p></td>
                                                           <td><p>{N.edgeCount}</p></td>
                                                         </tr>
                                                         <tr>
                                                           <td><p>Nodes:</p></td>
                                                           <td><p>{N.nodeCount}</p></td>
                                                         </tr>
                                                       </tbody>
                                                     </table>
                                                   </Paper>))
    console.log(stream)
    return (
      <div style={root}>
        {stream}
      </div>
    )
  }

}
