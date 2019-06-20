import "../styles/App.scss";
import React, { Component } from "react";
import * as d3 from "d3";
import PriceChartElement from "../../components/elements/PriceChartElement";
import SimplePriceChart from "../../components/elements/SimplePriceChart";
import OrderListComponent from "../orders/OrderListComponent";
import OrderListAggregated from "../../container/orders/OrderListAggregated";

class CentralColumnLayout extends Component {
  render() {
    return (
      <div>
        <SimplePriceChart width={800} height={600} />;<p>{this.props.header}</p>
        <p>Aggregation</p>
        <OrderListAggregated />
      </div>
    );
  }
}

export default CentralColumnLayout;
