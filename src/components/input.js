import React from "react";
import light_theme from "../theme_confg/light_theme.js";
import dark_theme from "../theme_confg/dark_theme.js";

import { connect } from "react-redux";

class Input extends React.Component {
  render() {
    const THEME = this.props.state.isDark ? dark_theme : light_theme;

    return (
      <div className={`${"value-container "} + ${THEME.input_bgc} + ${THEME.input_txt}`}>
        {this.props.initVal === ""
          ? Number(this.props.display)
          : Number(this.props.initVal)}
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

export default connect(mapStateToProps)(Input);
