import React, { Component } from 'react';
import styles from './Conversion.module.css';
import Card from '../Card/Card';

class Conversion extends Component {
  render() {
    return (
      <Card>
        <div className={styles.fromResult}>
          <input type="number" min="0" className={styles.fromResultAmount}/>
          <button type="button" className={styles.fromResultButton}>USD</button>
        </div>
        <div className={styles.toResult}>
          <span className={styles.toResultAmount}>xx.xxx</span>
          <span className={styles.toResultName}>XXX</span>
        </div>
        <div className={styles.rates}>
          <div className={styles.fromRate}>1 XXX = xx.xxxxxx XXX</div>
          <div className={styles.toRate}>1 XXX = x.xxxxxx XXX</div>
        </div>
        <div className={styles.date}>Thu, 28 Jun 2018 10:00 PM CDT</div>
        <div className={styles.utils}>
          <span className={styles.close} tabIndex="0">Delete</span>
        </div>
      </Card>
    )
  }
}

export default Conversion;