import React, { Component } from "react";
import { connect } from "react-redux";
import OrderTableElement from "../../components/elements/OrderTableElement";

class OrderListRecent extends Component {
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

export default connect(mapStateToProps)(OrderListRecent);
