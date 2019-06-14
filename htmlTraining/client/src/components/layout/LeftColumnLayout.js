import "../styles/App.css";
import React, { Component } from "react";
import OrderListComponent from "../orders/OrderListComponent";

class LeftColumnLayout extends Component {
  render() {
    return (
      <div className={this.props.style}>
        <p>{this.props.header}</p>
        <OrderListComponent />
      </div>
    );
  }
}

export default LeftColumnLayout;
