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
  componentDidUpdate() {
    this.createChart(this.props.orders);
  }

  drawContainingBox() {
    let svgCanvas = d3
      .select("svg")
      .attr("width", 600)
      .attr("height", 400)
      .style("background-color", "black")
      .style("color", "white")
      .style("border", "1px solid white");

    return svgCanvas;
  }

  drawChartData(buyData, sellData, data) {
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
    let x = d3.scaleLinear().range([0, width]);
    let y = d3.scaleLinear().range([height, 0]);

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

    var focus = svg.append("g").style("display", "none");

    // append the x line
    focus
      .append("line")
      .attr("class", "x")
      .style("stroke", "white")
      .style("stroke-dasharray", "3,3")
      .style("opacity", 0.5)
      .attr("y1", 0)
      .attr("y2", height);

    // append the y line
    focus
      .append("line")
      .attr("class", "y")
      .style("stroke", "white")
      .style("stroke-dasharray", "3,3")
      .style("opacity", 0.5)
      .attr("x1", width)
      .attr("x2", width);

    // place the value at the intersection
    focus
      .append("text")
      .attr("class", "y1")
      .style("stroke", "white")
      .style("stroke-width", "3.5px")
      .style("opacity", 0.8)
      .attr("dx", 8)
      .attr("dy", "-.3em");
    focus
      .append("text")
      .attr("class", "y2")
      .attr("dx", 8)
      .attr("dy", "-.3em");

    // place the date at the intersection
    focus
      .append("text")
      .attr("class", "y3")
      .style("stroke", "white")
      .style("stroke-width", "3.5px")
      .style("opacity", 0.8)
      .attr("dx", 8)
      .attr("dy", "1em");
    focus
      .append("text")
      .attr("class", "y4")
      .attr("dx", 8)
      .attr("dy", "1em");

    // Append the circle at the intersection
    focus
      .append("circle")
      .attr("class", "y")
      .style("fill", "white")
      .style("stroke", "white")
      .attr("r", 4);

    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .style("fill", "none")
      .style("pointer-events", "all")
      .on("mouseover", function() {
        focus.style("display", null);
      })
      .on("mouseout", function() {
        focus.style("display", "none");
      })
      .on("mousemove", mousemove);

    let bisectPrice = d3.bisector(function(d) {
      return d.price;
    }).left;

    function mousemove() {
      let x0 = x.invert(d3.mouse(this)[0]),
        i = bisectPrice(data, x0, 1),
        d0 = data[i - 1],
        d1 = data[i],
        d = x0 - d0 > d1 - x0 ? d1 : d0;

      d = data[i];

      //let xPoint = d3.axisBottom().scale(d.price);
      //let yPoint = d3.axisLeft().scale(d.quantity);

      focus
        .select("circle.y")
        .attr(
          "transform",
          "translate(" + x(d.price) + "," + y(d.quantity) + ")"
        );
      focus
        .select("text.y1")
        .attr(
          "transform",
          "translate(" + x(d.price) + "," + y(d.quantity) + ")"
        )
        .text("Quantity " + d.quantity);

      focus
        .select("text.y2")
        .attr(
          "transform",
          "translate(" + x(d.price) + "," + y(d.quantity) + ")"
        )
        .text("Quantity " + d.quantity);

      focus
        .select("text.y3")
        .attr(
          "transform",
          "translate(" + x(d.price) + "," + y(d.quantity) + ")"
        )
        .text("Price " + d.price);

      focus
        .select("text.y4")
        .attr(
          "transform",
          "translate(" + x(d.price) + "," + y(d.quantity) + ")"
        )
        .text("Price " + d.price);

      focus
        .select(".x")
        .attr(
          "transform",
          "translate(" + x(d.price) + "," + y(d.quantity) + ")"
        )
        .attr("y2", height - y(d.quantity));

      focus
        .select(".y")
        .attr(
          "transform",
          "translate(" + width * -1 + "," + y(d.quantity) + ")"
        )
        .attr("x2", width + width);
    }
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
