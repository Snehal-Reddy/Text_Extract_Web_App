import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="body">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <font color="black">This is a Character Recognition Web-Application</font><br/>
            Upload Image from your PC to detect the Text present in it:
          </p>
          <but className="button">Choose File</but>
        </header>
      </div>

    );
  }
}

export default App;
