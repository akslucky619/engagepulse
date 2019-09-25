import React from "react";
import light_theme from "../src/theme_confg/light_theme";
import dark_theme from "../src/theme_confg/dark_theme";

import { connect } from "react-redux";

import "./App.css";

import Calc from "./components/calc";

class App extends React.Component {
  render() {
    const THEME = this.props.state.isDark ? dark_theme : light_theme;

    return (
      <div className={"app " + THEME.bgc}>
        <div className="container">
          <Calc />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    state
  };
};

export default connect(mapStateToProps)(App);
