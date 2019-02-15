import React, { Component } from 'react';
import styles from './Conversion.module.css';
import Card from '../Card/Card';
import { getConversion } from '../../utils';

class Conversion extends Component {
  state = {
    ...this.props.conversion
  }

  onChange = event =>  {
    this.setState({
      amount: event.target.value
    })
  }

  onRefetch = async () => {
    const {fr, to, amount} = this.state;
    try {
      const conversion = await getConversion(fr, to, amount);
      this.setState({
        ...conversion
      });
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    const {date, fr, to, dc, rc, amount} = this.state;
    return (
      <Card>
        <button
          type="button"
          onClick={this.onRefetch}
          className={styles.refetchBtn}
        >
          ⟳
        </button>
        <div className={styles.fromResult}>
          <input
            onChange={this.onChange}
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
          <span className={styles.close} tabIndex="0">Delete</span>
        </div>
      </Card>
    )
  }
}

export default Conversion;