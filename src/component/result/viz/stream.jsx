import React from 'react'
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import Paper from 'material-ui/lib/paper';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

export default class Stream extends React.Component {

  constructor(props) {super(props)}

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
    const tiles = this.props.networks
    return (
     <div style={root}>
       <Paper zDepth={1}
         style={{
           width: '96%',
           marginTop: '10px'
         }}
       >
         <Table>
           <TableHeader>
             <TableRow>
               <TableHeaderColumn>Name</TableHeaderColumn>
               <TableHeaderColumn>Nodes</TableHeaderColumn>
               <TableHeaderColumn>Edges</TableHeaderColumn>
               <TableHeaderColumn>Created</TableHeaderColumn>
             </TableRow>
           </TableHeader>
          <TableBody>
             <TableRow>
               <TableHeaderColumn>Orca full pop chart</TableHeaderColumn>
               <TableHeaderColumn>4344343</TableHeaderColumn>
               <TableHeaderColumn>83332</TableHeaderColumn>
               <TableHeaderColumn>03/18/2015</TableHeaderColumn>
             </TableRow>
             <TableRow>
               <TableHeaderColumn>Small Orca Study</TableHeaderColumn>
               <TableHeaderColumn>443</TableHeaderColumn>
               <TableHeaderColumn>89</TableHeaderColumn>
               <TableHeaderColumn>09/1/2015</TableHeaderColumn>
             </TableRow>
             <TableRow>
               <TableHeaderColumn>Full GO Orca Genome</TableHeaderColumn>
               <TableHeaderColumn>19048</TableHeaderColumn>
               <TableHeaderColumn>43098</TableHeaderColumn>
               <TableHeaderColumn>06/9/2014</TableHeaderColumn>
             </TableRow>
          </TableBody>
         </Table>
       </Paper>
     </div>
    )
  }

}
