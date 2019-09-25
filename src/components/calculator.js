import React from "react";
import Buttons from "./buttons";

import Input from "./input";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      display:0,
      prevNumber: "",
      currentNumber: "",
      operator: ""
    };
  }

  addToInput = val => {
    console.log(val);
    this.setState({
      input: this.state.input + val
    });
  };

  clearInput = () => {
    this.setState({
      input: "",
      display: 0
    });
  };

  add = () => {
    this.setState({
      prevNumber: this.state.input,
      display: this.state.input,
      input: "",
      operator: "plus"
    });
  };

  sub = () => {
    this.setState({
      prevNumber: this.state.input,
      display: this.state.input,
      input: "",
      operator: "minus"
    });
  };

  multiply = () => {
    this.setState({
      prevNumber: this.state.input,
      display: this.state.input,
      input: "",
      operator: "multiply"
    });
  };

  divide = () => {
    this.setState({
      prevNumber: this.state.input,
      display: this.state.input,
      input: "",
      operator: "divide"
    });
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input;
    if (this.state.operator === "plus") {
      this.setState({
        input:
          parseInt(this.state.prevNumber) + parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "minus") {
      this.setState({
        input:
          parseInt(this.state.prevNumber) - parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input:
          parseInt(this.state.prevNumber) * parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input:
          parseInt(this.state.prevNumber) / parseInt(this.state.currentNumber)
      });
    }
  };

  render() {
    const { input, display } = this.state;
    return (
      <div>
        <Input initVal={input} display={display} />
        <Buttons
          handleClick={this.addToInput}
          handleClear={this.clearInput}
          handleAdd={this.add}
          handleEval={this.evaluate}
          handleSub={this.sub}
          handleMult={this.multiply}
          handleDiv={this.divide}
        />
      </div>
    );
  }
}

export default Calculator;
