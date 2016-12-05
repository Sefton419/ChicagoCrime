import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'

import CrimeListItem from '../components/crimeListItem.js';

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

class CrimeList extends Component {

  renderCrimes() {
    return this.props.crimes.map((crime) => {
      return (
        <div key={crime.id}>
          <CrimeListItem 
            description={crime.description}
            primary_type={crime.primary_type}
            location_description={crime.location_description}
            arrest={String(crime.arrest)}
            key={crime.id}  
          />
        </div>
      )
    }) 
  }

	render() {
		return (
			<div style={styles.listContainer}>
        <div>
          <div style={styles.header}>
  				  <h1>From CrimeList</h1>
          </div>
          {this.renderCrimes()}
        </div>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    crimes: state.crimes
  };
}

export default connect(mapStateToProps)(CrimeList);








