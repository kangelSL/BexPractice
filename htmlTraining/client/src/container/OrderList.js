import React, { Component } from "react";
import { connect } from "react-redux";
import { getOrders } from "../actions/index";
import OrderTableElement from "../components/elements/OrderTableElement";

class OrderList extends Component {
  componentDidMount() {
    // Call websocket to get data
    this.props.getOrders();
  }

  getTruncatedOrderBook() {
    if (typeof this.props.orders !== "undefined") {
      console.log("here");
      return this.props.orders;
    } else {
      return [];
    }
  }

  render() {
    return (
      <div>
        <OrderTableElement orders={this.getTruncatedOrderBook()} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOrders: order => dispatch(getOrders(order))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderList);
