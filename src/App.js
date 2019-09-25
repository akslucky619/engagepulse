import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Calc from "./components/calc";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <Calc />
        </div>
      </div>
    );
  }
}

export default App;
