import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import 'babel-polyfill';
import Navbar from './components/navbar.js'

const styles = {
	container: {
		backgroundColor: 'lightgrey',
		padding: '10px',
		height: 'auto',
		width: 'auto'
	}
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			situation: true,
			color: 'pink'
		};
		// this is where I will bind methods
		this.switch = this.switch.bind(this);
	}

	switch() {
		this.setState({ situation: !this.state.situation })
	}

	render() {
		const text = this.state.situation ? 'yes' : 'no';
		return (
			<div>
				<div 
					style={styles.container}
				>
					<Navbar 
						data={text}
						switch={this.switch}
					/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
