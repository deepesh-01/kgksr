import React, { Component } from 'react';
import {Header} from './Components/header.js'

class App extends Component {
  render() {
    return (
      <div >
        <header>
            <h1>App.js is working!</h1>
            <Header></Header>
        </header>
      </div>
    );
  }
}

export default App;