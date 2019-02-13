import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Converter from './components/Converter/Converter';
import ConversionsList from './components/ConversionsList/ConversionsList';

class App extends Component {

  render() {
    return (
    <div className='App'>
      <Header />
      <Main>
        <Converter />
        <ConversionsList />
      </Main>
    </div>
    );
  }
}

export default App;
