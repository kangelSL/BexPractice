import "../styles/App.scss";
import "../styles/Headers.scss";
import React, { Component } from "react";

class HeaderLayout extends Component {
  render() {
    return (
      <div>
        <p className={this.props.style}>{this.props.title}</p>
      </div>
    );
  }
}

export default HeaderLayout;
