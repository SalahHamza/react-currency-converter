import React from 'react';
import PropTypes from 'prop-types';

const select = ({value, currencies, name, styles, onChange}) => {

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
        value={value}
        name={name}
        id={name}
        onChange={event => onChange(event.target.value)}
      >
        {currencyOptions}
      </select>
    </div>
  );
}

select.protoTypes = {
  name: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  styles: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired
}

export default select;