import React from "react";
import light_theme from "../theme_confg/light_theme.js";
import dark_theme from "../theme_confg/dark_theme.js";

import "../App.css";

import Buttons from "./buttons";
import Input from "./input";

import { connect } from "react-redux";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prev: 0, // previous input/calculated value
      currentVal: 0, // currentVal input value
      prevVal: 0,
      isUserInput: false, // is the currentVal value a user Input (true) or default 0 (false)
      result: 0, // calculated result
      display: 0, // displayed value (user input or result)
      operation: "", // next operation in stack
      isScientific: false // boolean to display scientific buttons
    };
  }

  changeToScience = () => {
    if (this.state.isScientific === false) {
      this.setState({
        isScientific: true
      });
    } else {
      this.setState({
        isScientific: false
      });
    }
  };

  darkMode = () => {
    this.props.dispatch({ type: "DARK_MODE" });
  };

  lightMode = () => {
    this.props.dispatch({ type: "LIGHT_MODE" });
  };

  updateCurrent = val => {
    this.setState({
      currentVal: this.state.currentVal + val,
      display: this.state.currentVal + val,
      isUserInput: true
    });
  };

  clearAll = () => {
    this.setState({
      prev: 0,
      currentVal: 0,
      result: 0,
      display: 0,
      operation: "",
      prevVal: 0
    });
  };

  plus = (prevResult, currentVal) => {
    let result = Number(prevResult) + Number(currentVal);
    return result;
  };

  minus = (prevResult, currentVal) => {
    let { operation } = this.state;
    let result =
      operation === ""
        ? Number(currentVal)
        : Number(prevResult) - Number(currentVal);
    return result;
  };

  divide = (prevResult, currentVal) => {
    let result = Number(prevResult) / Number(currentVal);
    return result;
  };

  multiply = (prevResult, currentVal) => {
    let result = Number(prevResult) * Number(currentVal);
    return result;
  };


  // adds the chosen operation in the stack
  eval = e => {
    let { operation, isUserInput, currentVal, prevVal } = this.state;

    let nextOperation = "";

    if (e.target.name === "plus") {
      nextOperation = "plus";
    } else if (e.target.name === "minus") {
      nextOperation = "minus";
    } else if (e.target.name === "divide") {
      nextOperation = "divide";

      if (!isUserInput) {
        return this.setState({
          operation: nextOperation
        });
      }
    } else if (e.target.name === "multiply") {
      nextOperation = "multiply";

      if (!isUserInput) {
        return this.setState({
          operation: nextOperation
        });
      }
    }
    // executes if there's user input and he presses equal to
    else if (e.target.name === "equalTo" && isUserInput === true) {
      nextOperation = operation;
    }
    // executes if the user presses equal to and there's no new user input
    else if (e.target.name === "equalTo" && isUserInput === false) {
      nextOperation = operation;
      currentVal = prevVal;
    }

    return this.exec(nextOperation, currentVal);
  };

  // executes the previous operation in the stack
  exec = (nextOperation, currentVal) => {
    let { result, operation, prev } = this.state;
    let { plus, minus, divide, multiply } = this;

    if (operation === "plus") {
      result = plus(prev, currentVal);
    } else if (operation === "divide") {
      result = divide(prev, currentVal);
    } else if (operation === "minus") {
      result = minus(prev, currentVal);
    } else if (operation === "multiply") {
      result = multiply(prev, currentVal);
    } else if (operation === "") {
      result = result ? result : Number(currentVal);
    }

    // updates the state
    this.setState({
      result,
      operation: nextOperation,
      display: result,
      prev: result,
      currentVal: 0,
      prevVal: currentVal,
      isUserInput: false
    });
  };

  scienceEval = e => {
    let { operation, currentVal, isUserInput, prevVal } = this.state;

    let result = 0;
    let nextOperation = "";

    if (!isUserInput) currentVal = prevVal;

    if (e.target.name === "square") {
      result = currentVal * currentVal;
      nextOperation = "square";
    } else if (e.target.name === "reverse") {
      result = currentVal * -1;
      nextOperation = "reverse";
    } else if (e.target.name === "squareRoot") {
      result = Math.sqrt(currentVal);
      nextOperation = "squareRoot";
    }

    this.setState({
      currentVal: 0,
      isUserInput: false,
      operation: nextOperation,
      display: result,
      prev: result,
      prevVal: result,
      result
    });
  };

  render() {
    let { result, display } = this.state;

    const THEME = this.props.state.isDark ? dark_theme : light_theme;

    return (
      <>
        <div className={"App" }>
          <Input initVal={display} display={display} />

          <Buttons
            isScientific={this.state.isScientific}
            handleInput={this.updateCurrent}
            handleClear={this.clearAll}
            handleAdd={this.eval}
            handleEval={this.eval}
            handleSub={this.eval}
            handleMult={this.eval}
            handleDiv={this.eval}
            handleAll={this.evalAll}
            handleRev={this.scienceEval}
            handleSquare={this.scienceEval}
            handleRoot={this.scienceEval}
          />
        </div>
        <div>
          <button onClick={this.changeToScience}>Scientific</button>
          <button onClick={this.darkMode}>Dark Mode</button>
          <button onClick={this.lightMode}>Light Mode</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    state
  };
};

export default connect(mapStateToProps)(Calc);
