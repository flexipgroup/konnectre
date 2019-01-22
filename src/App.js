import React, { Component } from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './App.css';
import PrimaryNavBar from './components/PrimaryNavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrimaryNavBar />
      </div>
    );
  }
}

export default App;
