import React, { Component } from "react";
import { connect } from "react-redux";
import { getMatchedOrders } from "../../actions/index";
import OrderTableElement from "../../components/elements/OrderTableElement";

class OrderListRecent extends Component {
  componentDidMount() {
    // Call the API to get data
    this.props.getMatchedOrders();
  }

  getListItems() {
    if (typeof this.props.matchedOrders !== "undefined") {
      return this.props.matchedOrders;
    } else {
      return {};
    }
  }

  render() {
    return (
      <div>
        <OrderTableElement orders={this.getListItems()} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders,
    matchedOrders: state.matchedOrders
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMatchedOrders: order => dispatch(getMatchedOrders(order))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderListRecent);
