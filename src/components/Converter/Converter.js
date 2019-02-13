import React, { Component } from 'react';
import styles from './Converter.module.css';
import Card from '../Card/Card';
import CurrencySelector from '../CurrencySelector/CurrencySelector';


const structorConversionData = (data, fr, to, amount) => {
  const id = `${fr}_${to}`;
  const date = new Date();
  // direct rate: fr -> to
  const dc = data[id]['val'];
  // reverse rate: to -> fr
  const rc = data[`${to}_${fr}`]['val'];
  return {id, date, fr, to, dc, rc, amount};
}

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

  handleSubmit = async event => {
    event.preventDefault();
    // Do something here
    const { fromCurrency: fr, toCurrency:  to, amount } = this.state;
    const query = `${fr}_${to},${to}_${fr}`;
    const url   = `https://free.currencyconverterapi.com/api/v5/convert?q=${query}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      const conversion = structorConversionData(data.results, fr, to, amount);
      this.props.handleSubmit(conversion);
    } catch(err) {
      // handle fetch fail batter
      console.log(err);
    }
  }

 render() {
  return (
    <Card>
      <form className={styles.converterGrid} onSubmit={this.handleSubmit}>
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
    </Card>);
  }
}

export default Converter;