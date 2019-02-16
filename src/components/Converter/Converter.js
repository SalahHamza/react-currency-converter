import React from 'react';
import styles from './Converter.module.css';
import Card from '../Card/Card';
import CurrencySelector from '../CurrencySelector/CurrencySelector';
import { getConversion } from '../../utils';

const { useState, useEffect } = React;

const converter = props => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState(1);

  useEffect(
    () => {
      fetch(process.env.REACT_APP_CURRENCIES_URL_DEV)
        .then(res => res.json())
        .then(data => {
          const currencies = [];
          for(const key in data.results) {
            currencies.push(data.results[key]);
          }
          setCurrencies(currencies);
        })
        .catch(console.error);
    },
    [] // only call this once
  )

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const conversion = await getConversion(
        fromCurrency,
        toCurrency,
        amount
      );
      props.addConversion(conversion);
    } catch(err) {
      console.log(err);
    }
  }


  return (
    <Card>
      <form className={styles.converterGrid} onSubmit={handleSubmit}>
        <input
          aria-label="Conversion amount"
          className={styles.amount} name="amount"
          type="number" defaultValue="1"
          min="1"
          onChange={event => setAmount(event.target.value)}
        />

        <CurrencySelector
          currencies={currencies}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          amount={amount}
          styles={styles}
          handleFromCurrencyChange={value => setFromCurrency(value)}
          handleToCurrencyChange={value => setToCurrency(value)}
          handleSwapClick={() => {
            setFromCurrency(toCurrency);
            setToCurrency(fromCurrency);
          }}
        />

        <button className={styles.convertButton} type="submit">convert</button>
      </form>
    </Card>
  );
}

export default converter;