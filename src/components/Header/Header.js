import React from 'react';
import styles from './Header.module.css';

const header = _ => (
  <header className={styles.header}>
    <div className={styles.innerContainer}>
      <h1 className={styles.appName}>Currency Converter</h1>
    </div>
  </header>
);

export default header;