import React, { Component } from "react";

import Character from "../Characters/Characters";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Character />
      </div>
    );
  }
}

export default App;