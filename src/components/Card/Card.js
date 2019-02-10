import React from 'react';
import styles from './Card.module.css';

const card = props => (
  <div className={styles.card}>
    <div className={styles.innerContainer}>
      {props.children}
    </div>
  </div>
);

export default card;