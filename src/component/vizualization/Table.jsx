
import React from 'react'

import {
  BootstrapTable,
  TableHeaderColumn
} from 'react-bootstrap-table'

class Table extends React.Component {

  time(T) {
    var d = new Date(0)
    d.setUTCSeconds(T/1000.0)
    return d.toLocaleDateString()
  }

  getSelectedRows() {
    this.props.cart.networkSummaries.map(N => {
      return N.externalId
    })
  }

  handleSelection(S, isSelected) {
    if (isSelected) {
      this.props.cartActions.deleteNetwork(S)
    } else {
      this.props.cartActions.addNetwork(S)
    }
  }

  render() {
    const networkSummaries = this.props.networkSummaries.toJS()
    const tableStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      width: "100%",
      justifyContent: 'space-around',
      overflow: 'scroll'
    }
    const selectRow = {
      mode: 'checkbox',
      onSelect: this.handleSelection,
      selected: this.state.selectedRows()
    }
    return (
      <BootstrapTable data={networks} selectRow={selectRow}>
        <TableHeaderColumn dataField="externalId" isKey={true} dataSort={true}>ID</TableHeaderColumn>
        <TableHeaderColumn dataField="name" dataSort={true}>Name</TableHeaderColumn>
        <TableHeaderColumn dataField="owner" dataSort={true}>Owner</TableHeaderColumn>
        <TableHeaderColumn dataField="edgeCount" dataSort={true}>Edges</TableHeaderColumn>
        <TableHeaderColumn dataField="nodeCount" dataSort={true}>Nodes</TableHeaderColumn>
        <TableHeaderColumn dataField="creationTime" dataSort={true}>Created</TableHeaderColumn>
        <TableHeaderColumn dataField="modificationTime" dataSort={true}>Modified</TableHeaderColumn>
      </BootstrapTable>
    )
  }
}

const TableViz = {
  vizName: 'reorder',
  viz: Table
}

export default TableViz
