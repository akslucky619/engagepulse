import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div className="value-container">
         {this.props.initVal === "" ? Number(this.props.display) : Number(this.props.initVal)}
      </div>
    );
  }
}

export default Input;
