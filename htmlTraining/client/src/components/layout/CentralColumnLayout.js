import "../styles/App.scss";
import React, { Component } from "react";
import * as d3 from "d3";
import PriceChartElement from "../../components/elements/PriceChartElement";
import SimplePriceChart from "../../components/elements/SimplePriceChart";

class CentralColumnLayout extends Component {
  render() {
    return <SimplePriceChart width={800} height={600} />;
  }
}

export default CentralColumnLayout;
