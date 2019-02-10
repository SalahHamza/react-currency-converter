import React, { Component } from 'react';

class CurrencySelect extends Component {
  state = {
    value: this.props.value
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  }

  render() {
    const {currencies, name, className} = this.props;
    const currencyOptions = currencies
      .map((currency, i) => (
        <option
          key={`${i}__${name}__${currency.id}`}
          value={currency.id}
        >
          {currency.id}
        </option>
      ));
    return (
      <div className={className}>
        <label htmlFor={name}>From</label>
        <select
          value={this.state.value}
          name={name}
          id={name}
          onChange={this.handleChange}
        >
          {currencyOptions}
        </select>
      </div>
    );
  }
}


export default CurrencySelect;