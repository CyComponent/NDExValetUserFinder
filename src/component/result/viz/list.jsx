import React from 'react'
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

export default class List extends React.Component {

  constructor(props) {super(props)}

  add(network) {
   console.log("Nothing") 
  }

  render() {
    const root = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }
    const table = {
      overflowY: 'auto'
    }
    var tiles = this.props.networks
    console.log(tiles)
    return (
     <div style={root}>
       <Table multiSelectable={true} style={table}>
         <TableBody>
           {tiles.map(tile => (<TableRow><TableRowColumn>{tile.title}</TableRowColumn></TableRow>))}
         </TableBody>
       </Table>
     </div>
    )
  }

}
