import React, { Component } from 'react';
import styles from './Conversion.module.css';
import Card from '../Card/Card';

class Conversion extends Component {
  render() {
    const { conversion } = this.props;
    return (
      <Card>
        <div className={styles.fromResult}>
          <input
            value={Number(conversion.amount).toFixed(3)}
            className={styles.fromResultAmount}
            type="number"
            min="0"
          />
          <button
            type="button"
            className={styles.fromResultButton}
          >
            {conversion.fr}
          </button>
        </div>

        <div className={styles.toResult}>
          <span className={styles.toResultAmount}>
            {(Number(conversion.dc)*conversion.amount).toFixed(4)}
          </span>
          <span className={styles.toResultName}>
            {conversion.to}
          </span>
        </div>

        <div className={styles.rates}>
          <div className={styles.fromRate}>
            {`1 ${conversion.fr} = ${conversion.dc} ${conversion.to}`}
          </div>
          <div className={styles.toRate}>
            {`1 ${conversion.to} = ${conversion.rc} ${conversion.fr}`}
          </div>
        </div>

        <div className={styles.date}>
          {conversion.date.toUTCString()}
        </div>

        <div className={styles.utils}>
          <span className={styles.close} tabIndex="0">Delete</span>
        </div>
      </Card>
    )
  }
}

export default Conversion;