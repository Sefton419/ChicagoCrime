import React from 'react';

const styles = {
  listItem: {
    borderStyle: 'solid',
    padding: '3px',
    margin: '5px',
    backgroundColor: 'ivory'
  }
}

const CrimeListItem = ({}) => (
  <div>
    <div style={styles.listItem}>List Item</div>
    <div style={styles.listItem}>List Item</div>
    <div style={styles.listItem}>List Item</div>
    <div style={styles.listItem}>List Item</div>
    <div style={styles.listItem}>List Item</div>
    <div style={styles.listItem}>List Item</div>
    <div style={styles.listItem}>List Item</div>
    <div style={styles.listItem}>List Item</div>
    <div style={styles.listItem}>List Item</div>
    <div style={styles.listItem}>List Item</div>
    <div style={styles.listItem}>List Item</div>
    <div style={styles.listItem}>List Item</div>
  </div>
)

export default CrimeListItem;