import React, { Component } from 'react';
// import Rate from './Rate/Rate';
import Header from './Header.js'
import Routes from './Routes.js'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Routes />
      </div>
    );
  }
}

export default App;
