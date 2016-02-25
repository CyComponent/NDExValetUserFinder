import React from 'react'
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';

export default class Grid extends React.Component {

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
    const tiles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return (
     <div style={root}>
       <GridList
         cols={4}
         cellHeight={125}
         style={gridList}>
           {tiles.map(tile => (<GridTile style={{backgroundColor: 'grey'}}></GridTile>))}
       </GridList>
     </div>
    )
  }

}
