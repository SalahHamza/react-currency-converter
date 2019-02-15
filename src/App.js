import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Converter from './components/Converter/Converter';
import ConversionsList from './components/ConversionsList/ConversionsList';

const { Provider, Consumer} = React.createContext()

class App extends Component {
  state = {
    conversions: []
  }

  addConversion = conversion => {
    this.setState(state => {
      const conversions = state.conversions
        .filter(c => c.id !== conversion.id);

      conversions.unshift(conversion);

      return { conversions }
    });
  }

  deleteConversion = conversionId => {
    this.setState(state => ({
      conversions: state.conversions
        .filter(c => c.id !== conversionId)
    }));
  }

  render() {
    return (
    <div className='App'>
      <Header />
      <Main>
        <Provider
          value={{
            addConversion: this.addConversion,
            deleteConversion: this.deleteConversion
          }}
        >
          <Converter/>
          <ConversionsList
            conversions={this.state.conversions}
          />
        </Provider>
      </Main>
    </div>
    );
  }
}

export const Context = Consumer;

export default App;
