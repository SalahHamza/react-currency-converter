import React, { Component } from 'react';
import styles from './Converter.module.css';
import Card from '../Card/Card';
import CurrencySelector from '../CurrencySelector/CurrencySelector';

class Converter extends Component {

  state = {
    currencies: [],
    fromCurrency: {
      value: 'EUR'
    },
    toCurrency: {
      value: 'USD'
    },
    amount: "1"
  }

  componentDidMount = () => {
    fetch(process.env.REACT_APP_CURRENCIES_URL_DEV)
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

  handleInputChange = event => {
    this.setState({ amount: event.target.value });
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
  return (
    <Card>
      <form className={styles.converterGrid}>
        <input
          aria-label="Conversion amount"
          className={styles.amount} name="amount"
          type="number" defaultValue="1"
          min="1"
          onChange={this.handleInputChange}
        />

        <CurrencySelector
          {...this.state}
          styles={styles}
          handleSelectChange={this.handleSelectChange}
          handleSwapClick={this.handleSwapClick}
        />

        <button className={styles.convertButton} type="button">convert</button>
      </form>
    </Card>);
  }
}

export default Converter;