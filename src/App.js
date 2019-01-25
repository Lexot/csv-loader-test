import React, { Component } from 'react';
import './App.css';
import Loader from './components/Loader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Loader />
        </header>
      </div>
    );
  }
}

export default App;
