import React, { Component } from 'react';
import styles from './Converter.module.css';
import Card from '../Card/Card';

class Converter extends Component {
 render() {
  return (
    <Card>
      <form className={styles.converterGrid}>
        <input
          aria-label="Conversion amount"
          className={styles.amount} name="amount"
          type="number" defaultValue="1"
          min="1"
        />
        <div className={styles.fromCurrency}>
          <label htmlFor="fromCurrency">From</label>
          <select name="fromCurrency" id="fromCurrency"></select>
        </div>
        <button
          type="button"
          aria-label="swap"
          className={styles.exchange}
        >
          ⮀
        </button>
        <div className={styles.toCurrency}>
          <label htmlFor="toCurrency">To</label>
          <select name="toCurrency" id="toCurrency"></select>
        </div>
        <button className={styles.convertButton} type="button">convert</button>
      </form>
    </Card>);
  }
}

export default Converter;