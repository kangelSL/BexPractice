import "../styles/App.css";
import React, { Component } from "react";

class LeftColumnLayout extends Component {
  render() {
    return (
      <div className={this.props.style}>
        <p>{this.props.header}</p>
      </div>
    );
  }
}

export default LeftColumnLayout;
