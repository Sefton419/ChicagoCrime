import React, {Component} from 'react';

import CrimeListItem from './crimeListItem.js'

const styles = {

}

class CrimeList extends React.Component {
	constructor() {
		super()
    this.state = {
      // itemst that api gives for each item
    }
	}
	render() {
		return (
			<div>  
				<h1>From CrimeList</h1>
        <CrimeListItem />
			</div>
		)
	}
}

export default CrimeList;