import React, { Component } from 'react';
import styles from './Converter.module.css';
import Card from '../Card/Card';
import CurrencySelect from '../CurrencySelect/CurrencySelect';

class Converter extends Component {

  state = {
    currencies: []
  }

  componentDidMount = () => {
    fetch('https://free.currencyconverterapi.com/api/v5/currencies?')
      .then(res => res.json())
      .then(data => {
        const currencies = [];
        for(const key in data.results) {
          currencies.push(data.results[key]);
        }
        this.setState({ currencies });
      })
      .catch(console.error);
  }

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
        <CurrencySelect
          currencies={this.state.currencies}
          value="USD"
          className={styles.fromCurrency}
          name="fromCurrency" />
        <button
          type="button"
          aria-label="swap"
          className={styles.exchange}
        >
          ⮀
        </button>
        <CurrencySelect
          currencies={this.state.currencies}
          value="EUR"
          className={styles.toCurrency}
          name="toCurrency" />
        <button className={styles.convertButton} type="button">convert</button>
      </form>
    </Card>);
  }
}

export default Converter;