import React, { Component } from "react";
import "./App.css";

import Quotes from "../quotes/Quotes";
import Header from "../header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Quotes />
      </div>
    );
  }
}

export default App;