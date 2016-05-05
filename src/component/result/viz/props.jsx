import React from 'react'
import Paper from 'material-ui/lib/paper';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import Checkbox from 'material-ui/lib/checkbox';
import RaisedButton from 'material-ui/lib/raised-button';
import Divider from 'material-ui/lib/divider';
import { Table, Tr, Td } from 'reactable';

export default class Props extends React.Component {

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
    const table = this.props.networks.map((N) => (
            <Tr>
              <Td column="Name" value={N.name}><a href={"http://dev2.ndexbio.org/#/network/" + N.externalId}>{N.name}</a></Td>
              <Td column="Owner" value={N.owner}><a href={"http://dev2.ndexbio.org/#/user/" + N.owner}>{N.owner}</a></Td>
              <Td column="Properties"><Table style={{width: "100%"}} data={N.properties}/></Td>
            </Tr>
          ))
    return (
      <div style={root}>
        <Table sortable={true} style={{width: "100%"}}>
          {table}
        </Table>
      </div>
    )
  }
}
