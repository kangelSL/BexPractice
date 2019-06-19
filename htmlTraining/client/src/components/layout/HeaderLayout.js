import "../styles/App.scss";
import React, { Component } from "react";

class HeaderLayout extends Component {
  render() {
    return (
      <div className={this.props.style}>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default HeaderLayout;
