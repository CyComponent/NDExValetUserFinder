import React from 'react'
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';

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
       <GridList
         cols={1}
         cellHeight={200}
         style={gridList}>
           {tiles.map(tile => (<GridTile style={{backgroundColor: 'grey'}}></GridTile>))}
       </GridList>
     </div>
    )
  }

}
