import React, { Component } from 'react';
import styles from './Converter.module.css';
import Card from '../Card/Card';
import CurrencySelector from '../CurrencySelector/CurrencySelector';
import { getConversion } from '../../utils';

import { Context } from '../../App';

class Converter extends Component {

  state = {
    currencies: [],
    fromCurrency: 'EUR',
    toCurrency: 'USD',
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
      [name]: value
    })
  }

  handleSwapClick = () => {
    this.setState(state => ({
      fromCurrency: state.toCurrency,
      toCurrency: state.fromCurrency
    }))
  }

  handleSubmit = async (callback, event) => {
    event.preventDefault();

    const { fromCurrency: fr, toCurrency:  to, amount } = this.state;
    try {
      const conversion = await getConversion(fr, to, amount);
      callback(conversion);
    } catch(err) {
      console.log(err);
    }
  }

 render() {
  return (
    <Card>
      <Context>
        {context => {
          console.log(context);
          return (
            <form className={styles.converterGrid} onSubmit={this.handleSubmit.bind(this, context.addConversion)}>
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

            <button className={styles.convertButton} type="submit">convert</button>
          </form>
        )}}
      </Context>
    </Card>);
  }
}

export default Converter;