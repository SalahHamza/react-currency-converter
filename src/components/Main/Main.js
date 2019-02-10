import React from 'react';
import styles from './Main.module.css';

const main = props => (

  <main className={styles.main}>
    <div className={styles.innerContainer}>
      {props.children}
    </div>
  </main>
);

export default main;