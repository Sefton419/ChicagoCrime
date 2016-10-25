import React, {Component} from 'react';

const styles = {
  mapContainer: {
    verticalAlign: 'top',
    borderStyle: 'solid',
    width: '550px',
    display: 'inline-block',
  },
  header: {
    textAlign: 'center'
  }
}

class MapView extends React.Component {
	constructor() {
		super()
	}
	render() {
		return (
      <div style={styles.mapContainer}>
        <div>
          <div style={styles.header}>
            <h1>From MapView</h1>
          </div>
        </div>
      </div>
		)
	}
}

export default MapView;