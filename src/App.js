import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Converter from './components/Converter/Converter';

class App extends Component {

  render() {
    return (
    <div className='App'>
      <Header />
      <Main>
        <Converter />
      </Main>
    </div>
    );
  }
}

export default App;
