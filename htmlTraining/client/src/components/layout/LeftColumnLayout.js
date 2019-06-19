import "../styles/App.scss";
import React, { Component } from "react";
import OrderListComponent from "../orders/OrderListComponent";
import OrderListAggregated from "../../container/orders/OrderListAggregated";

class LeftColumnLayout extends Component {
  render() {
    return (
      <div>
        <p>{this.props.header}</p>
        <OrderListComponent />
        <p>Aggregation</p>
        <OrderListAggregated />
      </div>
    );
  }
}

export default LeftColumnLayout;
