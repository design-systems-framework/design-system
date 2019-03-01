import React, { Component } from 'react';
import ADGButton from './components/BlueLabel/Button';
import ADGTextfield from './components/RedLabel/Textfield';
import Textfield from './components/WhiteLabel/Textfield';
import NachosButton from './components/RedLabel/Button';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Unstyled Components
        </header>
        <Textfield />
        <ADGButton>AtlaskitButton</ADGButton>
        <NachosButton>NachosButton</NachosButton>

        <ADGTextfield/>
      </div>

    );
  }
}

export default App;
