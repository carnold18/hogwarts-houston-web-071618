import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Hogs from './Hogs'


class App extends Component {

  render() {
    return (
      <div className="App">
          <Nav />
          <Hogs />
      </div>
    )
  }
}

export default App;