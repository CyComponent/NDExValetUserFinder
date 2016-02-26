import React from 'react'
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

export default class List extends React.Component {

  constructor(props) {super(props)}

  render() {
    const root = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }
    const table = {
      overflowY: 'auto'
    }
    const tiles = [1,2,3,4,5]
    return (
     <div style={root}>
       <Table multiSelectable={true} style={table}>
         <TableBody>
           {tiles.map(tile => (<TableRow><TableRowColumn>TestRow</TableRowColumn></TableRow>))}
         </TableBody>
       </Table>
     </div>
    )
  }

}
