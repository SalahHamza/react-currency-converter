import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends Component {

  render() {
    return (
    <div className='App'>
      <Header></Header>
      <Main></Main>
    </div>
    );
  }
}

export default App;
