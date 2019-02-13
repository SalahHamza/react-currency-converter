import React from "react";
import Select from "../Select/Select";

const currencySelector = ({
  currencies,
  fromCurrency,
  toCurrency,
  styles,
  handleSelectChange,
  handleSwapClick
}) => (
  <>
    <Select
      currencies={currencies}
      value={fromCurrency.value}
      key={fromCurrency.value}
      className={styles.fromCurrency}
      onChange={handleSelectChange}
      name="fromCurrency"
    />

    <button
      type="button"
      aria-label="swap"
      className={styles.exchange}
      onClick={handleSwapClick}
    >
      ⮀
    </button>

    <Select
      currencies={currencies}
      value={toCurrency.value}
      key={toCurrency.value}
      className={styles.toCurrency}
      onChange={handleSelectChange}
      name="toCurrency"
    />
  </>
);

export default currencySelector;
