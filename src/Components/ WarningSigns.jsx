import React, { Component } from "react";
import {Alert} from "reactstrap"

class WarningSigns extends Component {
  render() {
      let {text} = this.props
    return (
      <div>
        <Alert color="danger">{text}</Alert>
      </div>
    );
  }
}

export default WarningSigns;
