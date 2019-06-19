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

/* Top- level variables for graph */
const margin = { top: 10, right: 30, bottom: 30, left: 50 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

/* Hold variable for graph */
//dataChart

// const svgWidth = 600;
// const svgHeight = 400;
// const margin = { top: 20, right: 20, bottom: 30, left: 50 };
// const width = svgWidth - margin.left - margin.right;
// const height = svgHeight - margin.top - margin.bottom;

const x = d3.scaleLinear().range([0, width]);
const y = d3.scaleLinear().range([height, 0]);

class PriceChartElement extends Component {
  componentDidMount() {
    this.didLoad = false;
  }

  componentDidUpdate() {
    if (!this.didLoad) {
      this.createChart();
      this.didLoad = true;
    } else {
      this.updateChart(this.props.orders);
    }
  }

  createChart() {
    let dataset = this.props.orders;

    let svgCanvas = this.drawContainingBox(dataset);

    let myData = this.splitData(dataset);

    this.drawChartData(myData[0], myData[1], dataset);
  }

  updateChart(data) {
    const line = d3
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

    let myData = this.splitData(data);
    let buyData = myData[0];
    let sellData = myData[1];

    let newData = d3
      .line()
      .x(function(d) {
        return d.price;
      })
      .y(function(d) {
        return d.quantity;
      });
    let newBuyLine = newData(buyData);
    let newSellLine = newData(sellData);

    console.log("testing123");
    console.log(newBuyLine);

    //d3.select("path#buySection").attr("d", newBuyLine);
    //d3.select("path#sellSection").attr("d", newSellLine);

    //d3.select("path#sellSection").remove();
    d3.select("path#buySection").remove();

    let g = select("g");

    g.append("path")
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

    g.append("path")
      .datum(sellData)
      .attr("id", "sellSection")
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

    //d3.select("path#sellSection").attr("d", sellData);
  }

  drawContainingBox() {
    let svgCanvas = "";
    svgCanvas = d3
      .select("svg")
      .attr("width", 600)
      .attr("height", 400)
      .style("background-color", "black")
      .style("color", "white")
      .style("border", "1px solid white");

    return svgCanvas;
  }

  drawChartData(buyData, sellData, data) {
    const svgWidth = 600;
    const svgHeight = 400;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    //Reset svg
    let svg = "";
    svg = d3
      .select("svg")
      .attr("id", "depthChart")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    const g = svg
      .append("g")
      .attr("id", "gItem")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    const x = d3.scaleLinear().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    const line = d3
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
      .attr("id", "yAxis")
      .attr("text-anchor", "end")
      .text("Price")
      .select(".domain")
      .remove();

    g.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("id", "xAxis")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Quantity");

    g.append("path")
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

    g.append("path")
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

    const focus = svg.append("g").style("display", "none");

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

    // place the quantity at the intersection
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

    // place the price at the intersection
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

    const bisectPrice = d3.bisector(function(d) {
      return d.price;
    }).left;

    function mousemove() {
      let x0 = x.invert(d3.mouse(this)[0]),
        i = bisectPrice(data, x0, 1),
        d0 = data[i - 1],
        d1 = data[i],
        d = x0 - d0 > d1 - x0 ? d1 : d0;

      d = data[i];

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
    let svg = d3
      .select("#dataChart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    return <div id="dataChart" />;
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders,
    loaded: false
  };
}

const PriceChart = connect(mapStateToProps)(PriceChartElement);

export default PriceChart;
