import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div className="input">
         {this.props.initVal == "" ? this.props.display : this.props.initVal}
      </div>
    );
  }
}

export default Input;
