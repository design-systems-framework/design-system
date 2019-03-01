import React, { Component } from 'react';
import BLButton from './components/BlueLabel/Button';
import RLTextfield from './components/RedLabel/Textfield';
import Textfield from './components/WhiteLabel/Textfield';
import RLButton from './components/RedLabel/Button';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Unstyled Components
        </header>
        <Textfield />
        <BLButton>AtlaskitButton</BLButton>
        <RLButton>NachosButton</RLButton>

        <RLTextfield/>
      </div>

    );
  }
}

export default App;
