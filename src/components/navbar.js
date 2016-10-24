
const React = require('react');
const ReactDOM = require('react-dom');

const styles = {
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
				<h1 style={styles.title}> 
					This is Chicago Crime 
				</h1>
				<div style={styles.question}
				> 
					Is there crime? {this.props.data} 
				</div>
				<button onClick={this.props.switch}/>
			</div>
		)
	}
}

export default Navbar;