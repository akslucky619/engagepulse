import React from "react";
import "../App.css";

class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: [
        "1",
        "2",
        "3",
        "+",
        "4",
        "5",
        "6",
        "-",
        "7",
        "8",
        "9",
        "*",
        "Clear",
        "0",
        "=",
        "/"
      ],
      scnButtons: ["-/+", "√", "c^2"]
    };
  }

  render() {
    const { buttons, scnButtons } = this.state;

    let displayBtns = this.props.isScientific ? buttons.concat(scnButtons) : buttons;

    return (
      <div className="buttons-container">
        {displayBtns.map((item, key) => {
          if (item === "Clear") {
            return (
              <button onClick={() => this.props.handleClear()} key={key}>
                {item}
              </button>
            );
          } else if (item === "=") {
            return (
              <button
                name="equalTo"
                onClick={e => this.props.handleEval(e)}
                key={key}
              >
                {item}
              </button>
            );
          } else if (item === "+") {
            return (
              <button
                name="plus"
                onClick={e => {
                  this.props.handleAdd(e);
                }}
                key={key}
              >
                {item}
              </button>
            );
          } else if (item === "-") {
            return (
              <button
                name="minus"
                onClick={e => this.props.handleSub(e)}
                key={key}
              >
                {item}
              </button>
            );
          } else if (item === "*") {
            return (
              <button
                name="multiply"
                onClick={e => this.props.handleMult(e)}
                key={key}
              >
                {item}
              </button>
            );
          } else if (item === "/") {
            return (
              <button
                name="divide"
                onClick={e => this.props.handleDiv(e)}
                key={key}
              >
                {item}
              </button>
            );
          } else if (item === "-/+") {
            return (
              <button
                name="reverse"
                onClick={e => this.props.handleRev(e)}
                key={key}
              >
                {item}
              </button>
            );
          } else if (item === "√") {
            return (
              <button
                name="squareRoot"
                onClick={e => this.props.handleRoot(e)}
                key={key}
              >
                {item}
              </button>
            );
          } else if (item === "c^2") {
            return (
              <button
                name="square"
                onClick={e => this.props.handleSquare(e)}
                key={key}
              >
                {item}
              </button>
            );
          } else {
            return (
              <button onClick={() => this.props.handleInput(item)} key={key}>
                {item}
              </button>
            );
          }
        })}
      </div>
    );
  }
}

export default Buttons;
