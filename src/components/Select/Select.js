import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  state = {
    value: this.props.value
  }

  handleChange = event => {
    const value = event.target.value;
    this.props.onChange(this.props.name, value);
  }

  render() {
    const {currencies, name, styles} = this.props;

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
      <div className={styles[name]}>
        <label
          htmlFor={name}
          className={styles[`${name}Label`]}
        >
          From
        </label>
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

Select.protoTypes = {
  name: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  styles: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired
}

export default Select;