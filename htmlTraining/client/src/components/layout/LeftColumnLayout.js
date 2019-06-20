import "../styles/App.scss";
import React, { Component } from "react";
import OrderListComponent from "../orders/OrderListComponent";

class LeftColumnLayout extends Component {
  render() {
    return (
      <div>
        <p>{this.props.header}</p>
        <OrderListComponent />
      </div>
    );
  }
}

export default LeftColumnLayout;
