import "../styles/App.scss";
import React, { Component } from "react";
import OrderListRecent from "../../container/orders/OrderListRecent";
import OrderListPrivate from "../../container/orders/OrderListPrivate";

class RightColumnLayout extends Component {
  render() {
    return (
      <div>
        <p>{this.props.header}</p>
        <OrderListRecent />
        <OrderListPrivate />
      </div>
    );
  }
}

export default RightColumnLayout;
