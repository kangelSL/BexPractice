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