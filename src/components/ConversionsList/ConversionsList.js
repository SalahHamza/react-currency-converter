import React from 'react';
import styles from './ConversionsList.module.css';
import Conversion from '../Conversion/Conversion';

const conversionsList = props => {
  return (
    <div className={styles.conversionsList}>
      {
        props.conversions.map(c => (
          <Conversion
            key={c.id}
            conversion={c}
            deleteConversion={props.deleteConversion}
          />
        ))
      }
    </div>
  )
}

export default conversionsList;
