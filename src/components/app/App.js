import React, { Component } from "react";

import "./App.css";

import Lamp from "../Lamp/Lamp";
import Header from "../Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Lamp />
      </div>
    );
  }
}

export default App;