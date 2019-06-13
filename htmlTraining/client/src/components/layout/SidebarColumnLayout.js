import "../styles/App.css";
import React, { Component } from "react";
import OrderFormLayout from "./OrderFormLayout";

class SidebarColumnLayout extends Component {
  render() {
    return (
      <div className={this.props.style}>
        <p>{this.props.header}</p>
        <OrderFormLayout />
      </div>
    );
  }
}

export default SidebarColumnLayout;
