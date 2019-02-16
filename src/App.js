import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Converter from './components/Converter/Converter';
import ConversionsList from './components/ConversionsList/ConversionsList';

const { useState } = React;

const app = () => {
  const [conversions, setConversions] = useState([]);

  const addConversion = conversion => {
    const _conversions = conversions
    .filter(c => c.id !== conversion.id);

    _conversions.unshift(conversion);

    setConversions(_conversions);
  }

  const deleteConversion = conversionId => {
    setConversions(
      conversions.filter(c => c.id !== conversionId)
    )
  }

  return (
  <div className='App'>
    <Header />
    <Main>
      <Converter
        addConversion={addConversion}
      />
      <ConversionsList
        deleteConversion={deleteConversion}
        conversions={conversions}
      />
    </Main>
  </div>
  );
}

export default app;
