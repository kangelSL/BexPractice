import "../styles/App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { selection } from "d3-selection";
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

// Set the dimensions of the canvas / graph
var margin = { top: 30, right: 20, bottom: 30, left: 50 },
  width = 600 - margin.left - margin.right,
  height = 270 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// Define the axes
var xAxis = d3.axisBottom(x).ticks(5);

var yAxis = d3.axisLeft(y).ticks(5);

// Define the line
var valueline = d3
  .line()
  .x(function(d) {
    return x(d.price);
  })
  .y(function(d) {
    return y(d.quantity);
  });

class SimplePriceChartElement extends Component {
  componentDidMount() {
    this.didLoad = false;
  }

  componentDidUpdate() {
    if (!this.didLoad) {
      this.drawChart();
      this.didLoad = true;
    } else {
      this.updateChart(this.props.orders);
    }
  }

  drawChart() {
    // Adds the svg canvas
    var svg = d3
      .select("#option")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Get the data
    let data = this.props.orders;

    data.forEach(function(d) {
      d.quantity = +d.quantity;
      d.price = +d.price;
    });

    // Scale the range of the data
    x.domain(
      d3.extent(data, function(d) {
        return d.price;
      })
    );
    y.domain([
      d3.min(data, function(d) {
        return d.quantity;
      }),
      d3.max(data, function(d) {
        return d.quantity;
      })
    ]);

    let myData = this.splitData(data);
    let buyData = myData[0];
    let sellData = myData[1];

    // Append area line sell data
    svg
      .append("path")
      .datum(sellData)
      .attr("id", "sellSection")
      .attr("class", "line")
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

    // Append area line buy data
    svg
      .append("path")
      .datum(buyData)
      .attr("id", "buySection")
      .attr("class", "line")
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

    // Add the X Axis
    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    // Add the Y Axis
    svg
      .append("g")
      .attr("class", "y axis")
      .call(yAxis);
  }

  updateChart(data) {
    // Get the data again
    let myData = this.splitData(data);
    let buyData = myData[0];
    let sellData = myData[1];

    data.forEach(function(d) {
      d.price = +d.price;
      d.quantity = +d.quantity;
    });

    //Scale the range of the data again
    x.domain(
      d3.extent(data, function(d) {
        return d.price;
      })
    );
    y.domain([
      0,
      d3.max(data, function(d) {
        return d.quantity;
      })
    ]);

    // Select the section we want to apply our changes to
    let svg = d3.select("#option").transition();

    // Update area lines
    svg
      .select("#buySection")
      .duration(750)
      .attr("d", valueline(buyData));

    svg
      .select("#sellSection")
      .duration(750)
      .attr("d", valueline(sellData));

    // Change the X axis
    svg
      .select(".x.axis")
      .duration(750)
      .call(xAxis);

    // change the Y axis
    svg
      .select(".y.axis")
      .duration(750)
      .call(yAxis);
  }

  splitData(dataset) {
    let buyData = dataset.filter(function(data) {
      return data.action === 1;
    });

    let sellData = dataset.filter(function(data) {
      return data.action === 2;
    });

    return [buyData, sellData];
  }

  render() {
    return <div id="option" style={{ backgroundColor: "white", width: 700 }} />;
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders,
    loaded: false
  };
}

const SimpleChart = connect(mapStateToProps)(SimplePriceChartElement);

export default SimpleChart;
