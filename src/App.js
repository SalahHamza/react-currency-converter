import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Converter from './components/Converter/Converter';
import ConversionsList from './components/ConversionsList/ConversionsList';

class App extends Component {
  state = {
    conversions: []
  }

  handleConverterSumbit = conversion => {
    this.setState(state => {
      const conversions = state.conversions
        .filter(c => c.id !== conversion.id);

      conversions.unshift(conversion);

      return { conversions }
    });
  }

  render() {
    return (
    <div className='App'>
      <Header />
      <Main>
        <Converter
          handleSubmit={this.handleConverterSumbit}
        />
        <ConversionsList />
      </Main>
    </div>
    );
  }
}

export default App;
