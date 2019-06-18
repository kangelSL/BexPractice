import "../styles/App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as d3 from "d3";
import {
  select,
  csv,
  scaleLinear,
  scaleTime,
  extent,
  axisLeft,
  axisBottom,
  line,
  curveBasis
} from "d3";
import { AggregateData } from "../../reducers/data/Aggregate";

class PriceChartElement extends Component {
  drawContainingBox() {
    let svgCanvas = d3
      .select("svg")
      //.append("svg")
      .attr("width", 600)
      .attr("height", 400)
      .style("background-color", "white")
      .style("border", "1px solid white");

    return svgCanvas;
  }

  drawChartData(buyData, sellData, data) {
    var curveFunc = d3
      .line()
      .curve(d3.curveBasis) // This is where you define the type of curve. Try curveStep for instance.
      .x(function(d) {
        return d.price;
      })
      .y(function(d) {
        return d.quantity;
      });

    let svgWidth = 600;
    let svgHeight = 400;
    let margin = { top: 20, right: 20, bottom: 30, left: 50 };
    let width = svgWidth - margin.left - margin.right;
    let height = svgHeight - margin.top - margin.bottom;

    let svg = d3
      .select("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    let g = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    let x = d3.scaleLinear().rangeRound([0, width]);
    let y = d3.scaleLinear().rangeRound([height, 0]);

    let line = d3
      .line()
      .x(function(d) {
        return x(d.price);
      })
      .y(function(d) {
        return y(d.quantity);
      });
    x.domain(
      d3.extent(data, function(d) {
        return d.price;
      })
    );
    y.domain(
      d3.extent(data, function(d) {
        return d.quantity;
      })
    );

    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .append("text")
      .attr("text-anchor", "end")
      .text("Price")
      .select(".domain")
      .remove();

    g.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Quantity");

    g.append("path")
      .datum(buyData)
      .attr("fill", "#B22222")
      .attr("stroke", "red")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .area()
          .x(function(d) {
            return x(d.price);
          })
          .y0(y(100))
          .y1(function(d) {
            return y(d.quantity);
          })
      );
    //.attr("d", curveFunc(buyData));

    g.append("path")
      .datum(sellData)
      .attr("fill", "#cce5df")
      .attr("stroke", "green")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .area()
          .x(function(d) {
            return x(d.price);
          })
          .y0(y(100))
          .y1(function(d) {
            return y(d.quantity);
          })
      );
  }

  createChart(dataset) {
    let orderAggregateArray = AggregateData(dataset);

    let buyData = dataset.filter(function(data) {
      return data.action === 1;
    });

    let sellData = dataset.filter(function(data) {
      return data.action === 2;
    });

    let svgCanvas = this.drawContainingBox(dataset);

    this.drawChartData(buyData, sellData, dataset);

    console.log(orderAggregateArray);
  }

  render() {
    this.createChart(this.props.orders);
    return (
      <div>
        <svg id="depthChart" width="1000" height="500" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders
  };
}

const PriceChart = connect(mapStateToProps)(PriceChartElement);

export default PriceChart;
