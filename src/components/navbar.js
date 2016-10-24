
import React, {Component} from 'react';

import CrimeList from './crimeList.js'
import MapView from './mapView.js'

const styles = {
	navbar: {
		backgroundColor: 'pink',
		margin: '0 auto'
	},
	title: {
		display: 'inline-block'
	},
	button: {
		display: 'inline-block',
		float: 'right'
	},
	question: {

	}
}

class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			toggle: true
		}
		// this is where I bind functions
	}


	render() {
		return (
			<div>
				<div style={styles.navbar}>
					<div style={styles.title}> 
						<h1>This is Chicago Crime</h1>
					</div>
					<button 
						style={styles.button}
						onClick={this.props.switch}
					>
					Refresh
					</button>
					<div style={styles.question}
					> 
						Is there crime? {this.props.data} 
					</div>
				</div>
				<CrimeList />
				<MapView />
			</div>
		)
	}
}

export default Navbar;