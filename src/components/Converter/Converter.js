import React, { Component } from 'react';
import styles from './Converter.module.css';
import Card from '../Card/Card';
import CurrencySelect from '../CurrencySelect/CurrencySelect';

class Converter extends Component {

  state = {
    currencies: [],
    fromCurrency: {
      value: 'EUR'
    },
    toCurrency: {
      value: 'USD'
    }
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

  handleSelectChange = (name, value) => {
    this.setState({
      [name]: { value }
    })
  }

  handleSwapClick = () => {
    this.setState(state => ({
      fromCurrency: {
        value: state.toCurrency.value
      },
      toCurrency: {
        value: state.fromCurrency.value
      }
    }))
  }

 render() {
  const {currencies, fromCurrency, toCurrency} = this.state;
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
          currencies={currencies}
          value={fromCurrency.value}
          key={fromCurrency.value}
          className={styles.fromCurrency}
          onChange={this.handleSelectChange}
          name="fromCurrency" />

        <button
          type="button"
          aria-label="swap"
          className={styles.exchange}
          onClick={this.handleSwapClick}
        >
          ⮀
        </button>

        <CurrencySelect
          currencies={currencies}
          value={toCurrency.value}
          key={toCurrency.value}
          className={styles.toCurrency}
          onChange={this.handleSelectChange}
          name="toCurrency" />

        <button className={styles.convertButton} type="button">convert</button>
      </form>
    </Card>);
  }
}

export default Converter;