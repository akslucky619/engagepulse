import React from "react";
import "./button.css";

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
      ]
    };
  }
  

  render() {
    const { buttons } = this.state;
    return (
      <div className="btn-container">
        {buttons.map((item, key) => {
          if (item === "Clear") {
            return (
              <button onClick={() => this.props.handleClear()} key={key}>
                {item}
              </button>
            );
          } else if (item === "=") {
            return (
              <button onClick={()=>this.props.handleEval()} key={key}>
                {item}
              </button>
            );
          } else if (item === "+") {
            return (
              <button onClick={() => this.props.handleAdd()} key={key}>
                {item}
              </button>
            );
          }else if (item === "-") {
            return (
              <button onClick={() => this.props.handleSub()} key={key}>
                {item}
              </button>
            );
          }else if (item === "*") {
            return (
              <button onClick={() => this.props.handleMult()} key={key}>
                {item}
              </button>
            );
          }else if (item === "/") {
            return (
              <button onClick={() => this.props.handleDiv()} key={key}>
                {item}
              </button>
            );
          } else {
            return (
              <button onClick={() => this.props.handleClick(item)} key={key}>
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
