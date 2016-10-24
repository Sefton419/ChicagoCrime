import 'babel-polyfill';
import Navbar from './components/navbar.js'

const React = require('react');
const ReactDOM = require('react-dom');

const styles = {
	container: {
		position: 'static',
		textAlign: 'center',
		backgroundColor: 'beige'
	},
	title: {
		display: 'inlineBlock'
	},
	question: {
		position: 'static',
		width: '50%',
		margin: 'auto',
		backgroundColor: 'lightgrey',
		display: 'inlineBlock'
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
