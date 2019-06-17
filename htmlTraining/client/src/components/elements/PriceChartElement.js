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
  convertDataToPackageFormat(data) {
    let newArray = [];

    data.forEach(function(item) {
      newArray.push = {
        type: item.action === 1 ? "bid" : "ask",
        total: item.quantity,
        price: item.price
      };
    });

    return newArray;
  }

  drawContainingBox() {
    let svgCanvas = d3
      .select(this.refs.canvas)
      .append("svg")
      .attr("width", 600)
      .attr("height", 400)
      .style("background-color", "white")
      .style("border", "1px solid white");

    return svgCanvas;
  }

  drawAxis(svgCanvas, data) {
    //Min/max of quantity
    let minQuantity = d3.min(data, function(d) {
      return d.quantity;
    });
    let maxQuantity = d3.max(data, function(d) {
      return d.quantity;
    });

    //Min/max of price
    let minPrice = d3.min(data, function(d) {
      return d.price;
    });
    let maxPrice = d3.max(data, function(d) {
      return d.price;
    });

    // Create scale
    let xScale = d3
      .scaleLinear()
      .domain([minQuantity, maxQuantity])
      .range([0, 600 - 100]);

    // Add scales to axis
    let x_axis = d3.axisBottom().scale(xScale);

    let yScale = d3
      .scaleLinear()
      .domain([minPrice, maxPrice])
      .range([600 / 2, 0]);

    var y_axis = d3.axisLeft().scale(yScale);

    //Append group and insert axis
    svgCanvas
      .append("g")
      .attr("transform", "translate(50, 330)")
      .call(x_axis);

    svgCanvas
      .append("g")
      .attr("transform", "translate(50, 30)")
      .call(y_axis);
  }

  drawLineChart(svgCanvas, data) {
    // Add the line
    svgCanvas
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line()
          .x(function(d) {
            return d.price;
          })
          .y(function(d) {
            return d.quantity;
          })
      );
  }

  drawAreaChart(svgCanvas, data) {
    // prepare a helper function
    var curveFunc = d3
      .area()
      .x(function(d) {
        return d.price;
      }) // Position of both line breaks on the X axis
      .y1(function(d) {
        return d.quantity;
      }) // Y position of top line breaks
      .y0(200); // Y position of bottom line breaks (200 = bottom of svg area)

    // Add the path using this helper function
    svgCanvas
      .append("path")
      .attr("d", curveFunc(data))
      .attr("stroke", "black")
      .attr("fill", "#69b3a2");
  }

  drawCurveChart(svgCanvas, data) {
    // prepare a helper function
    var curveFunc = d3
      .line()
      .curve(d3.curveBasis) // This is where you define the type of curve. Try curveStep for instance.
      .x(function(d) {
        return d.price;
      })
      .y(function(d) {
        return d.quantity;
      });

    // Add the path using this helper function
    svgCanvas
      .append("path")
      .attr("d", curveFunc(data))
      .attr("stroke", "black")
      .attr("fill", "none");
  }

  createChart(dataset) {
    let orderAggregateArray = AggregateData(dataset);

    let svgWidth = 500,
      svgHeight = 300,
      barPadding = 5;

    let barWidth = svgWidth / dataset.length;

    //dataset = [12, 22, 23, 34, 55];
    let svg = d3
      .select("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    let barChart = svg
      .selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("y", function(d) {
        return svgHeight - d.quantity;
      })
      .attr("height", function(d) {
        return d.price;
      })
      .attr("width", barWidth - barPadding)
      .attr("transform", function(d, i) {
        var translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
      });

    let labels = svg
      .selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(function(d) {
        return d.quantity;
      })
      .attr("y", function(d, i) {
        return svgHeight - d.quantity - 2;
      })
      .attr("x", function(d, i) {
        return barWidth * i;
      })
      .attr("fill", "black");

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
