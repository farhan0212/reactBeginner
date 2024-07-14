import React, { Component } from "react";
import "./index.css";
import Greet from "./components/Greet.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
      </div>
    );
  }
}

export default App;
