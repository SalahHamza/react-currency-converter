import React from "react";
import Select from "../Select/Select";

const currencySelector = ({
  currencies,
  fromCurrency,
  toCurrency,
  styles,
  handleFromCurrencyChange,
  handleToCurrencyChange,
  handleSwapClick
}) => (
  <>
    <Select
      currencies={currencies}
      value={fromCurrency}
      key={`fromCurrency_${fromCurrency}`}
      styles={styles}
      onChange={handleFromCurrencyChange}
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
      value={toCurrency}
      key={`toCurrency_${toCurrency}`}
      styles={styles}
      onChange={handleToCurrencyChange}
      name="toCurrency"
    />
  </>
);

export default currencySelector;
