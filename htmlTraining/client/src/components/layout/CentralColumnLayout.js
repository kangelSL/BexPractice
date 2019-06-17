import "../styles/App.css";
import React, { Component } from "react";
import * as d3 from "d3";
import PriceChartElement from "../../components/elements/PriceChartElement";

class CentralColumnLayout extends Component {
  render() {
    return <PriceChartElement />;
  }
}

export default CentralColumnLayout;
