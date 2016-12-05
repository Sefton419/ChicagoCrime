import React, { Component } from 'react';


const styles = {
  listItem: {
    borderStyle: 'solid',
    padding: '3px',
    margin: '5px',
    backgroundColor: 'ivory',
    height: 'auto'
  }
}

class CrimeListItem extends Component {
  constructor(props) {
    super(props)
  }   

  render() {
    return (
      <div style={styles.listItem}>
        <div>{this.props.description}</div>
        <div>{this.props.location_description}</div>
        <div>{this.props.primary_type}</div>
        <div>{this.props.description}</div>
        Arrested: {this.props.arrest}
      </div>
    )
  }
}


export default CrimeListItem;