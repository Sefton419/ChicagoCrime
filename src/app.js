import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import { Router, Route, IndexRoute, browserHistory } from 'react-router'
// import 'babel-polyfill';

import Navbar from './components/navbar.js'
import CrimeList from './containers/crimeList.js'
import MapView from './components/mapView.js'
import reducers from './reducers';

const styles = {
	container: {
		backgroundColor: 'lightgrey',
		padding: '10px',
		height: '800px',
		width: '1250px'
	}
}

class App extends Component {
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
				<div style={styles.container}>
					<Navbar 
						data={text}
						switch={this.switch}
					/>
					<CrimeList />
					<MapView />
				</div>
			</div>
		);
	}
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>,
	document.getElementById('app')
);
