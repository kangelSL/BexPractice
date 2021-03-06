var React = require("react");
var _ = require("lodash");

var d3Chart = require("./d3Chart");

require("./Chart.less");

var DepthChart = React.createClass({
  getDefaultProps: function() {
    return {
      width: "100%",
      height: "300px"
    };
  },

  dispatcher: null,

  componentDidMount: function() {
    var el = this.getDOMNode();
    var dispatcher = d3Chart.create(
      el,
      {
        width: this.props.width,
        height: this.props.height
      },
      this.getChartState()
    );
    dispatcher.on("point:mouseover", this.showTooltip);
    dispatcher.on("point:mouseout", this.hideTooltip);
    this.dispatcher = dispatcher;
  },

  componentDidUpdate: function(prevProps, prevState) {
    var el = this.getDOMNode();
    d3Chart.update(el, this.getChartState(), this.dispatcher);
  },

  getChartState: function() {
    var appState = this.props.appState;

    var tooltips = [];
    if (appState.showingAllTooltips) {
      tooltips = appState.data;
    } else if (appState.tooltip) {
      tooltips = [appState.tooltip];
    }

    return _.assign({}, appState, { tooltips: tooltips });
  },

  render: function() {
    return <div className="Chart" />;
  },

  showTooltip: function(d) {
    if (this.props.appState.showingAllTooltips) {
      return;
    }

    this.props.setAppState({
      tooltip: d
    });
  },

  hideTooltip: function() {
    if (this.props.appState.showingAllTooltips) {
      return;
    }

    this.props.setAppState({
      tooltip: null,
      prevDomain: null
    });
  }
});

module.exports = DepthChart;
