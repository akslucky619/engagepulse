import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Calculator from "./components/calculator";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Calculator />
      </div>
    );
  }
}

export default App;
