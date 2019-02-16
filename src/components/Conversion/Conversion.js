import React from 'react';
import styles from './Conversion.module.css';
import Card from '../Card/Card';
import { getConversion } from '../../utils';

const { useState } = React;

const conversion = props => {
  const [conversion, setConversion] = useState(props.conversion);

  const {date, fr, to, dc, rc, amount, id} = conversion;

  const handleAmountInputChange = event => {
    setConversion({
      ...conversion,
      amount: event.target.value
    });
  }

  const handleRefetchButtonClick = async () => {
    try {
      const conversion = await getConversion(fr, to, amount);
      setConversion(conversion);
    } catch(err) {
      console.log(err);
    }
  }

  const handleDeleteButtonClick = () => {
    props.deleteConversion(id);
  }

  return (
    <Card>
      <button
        type="button"
        onClick={handleRefetchButtonClick}
        className={styles.refetchBtn}
      >
        ⟳
      </button>
      <div className={styles.fromResult}>
        <input
          onChange={handleAmountInputChange}
          value={amount}
          className={styles.fromResultAmount}
          type="number"
          min="0"
        />
        <span
          type="button"
          className={styles.fromResultLabel}
        >
          {fr}
        </span>
      </div>

      <div className={styles.toResult}>
        <span className={styles.toResultAmount}>
          {(Number(dc)*amount).toFixed(4)}
        </span>
        <span className={styles.toResultName}>
          {to}
        </span>
      </div>

      <div className={styles.rates}>
        <div className={styles.fromRate}>
          {`1 ${fr} = ${dc} ${to}`}
        </div>
        <div className={styles.toRate}>
          {`1 ${to} = ${rc} ${fr}`}
        </div>
      </div>

      <div className={styles.date}>
        {date.toUTCString()}
      </div>

      <div className={styles.utils}>
        <button
          className={styles.close}
          onClick={handleDeleteButtonClick}
        >
          🗑
        </button>
      </div>
    </Card>
  )
}


export default conversion;