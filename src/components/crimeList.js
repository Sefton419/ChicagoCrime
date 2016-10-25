import React, {Component} from 'react';

import CrimeListItem from './crimeListItem.js'

const styles = {
  listContainer: {
    verticalAlign: 'top',
    borderStyle: 'solid',
    width: '550px',
    display: 'inline-block'
  },
  header: {
    textAlign: 'center'
  }
}

class CrimeList extends React.Component {
	constructor() {
		super()
    this.state = {
      // items that api gives for each item
    }
	}
	render() {
		return (
			<div style={styles.listContainer}>
        <div>
          <div style={styles.header}>
  				  <h1>From CrimeList</h1>
          </div>
          <CrimeListItem />
        </div>
			</div>
		)
	}
}

export default CrimeList;