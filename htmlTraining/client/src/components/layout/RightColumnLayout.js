import "../styles/App.css";
import React, { Component } from "react";
import OrderListRecent from "../../container/orders/OrderListRecent";

class RightColumnLayout extends Component {
  render() {
    return (
      <div>
        <p>{this.props.header}</p>
        <OrderListRecent />
      </div>
    );
  }
}

export default RightColumnLayout;
