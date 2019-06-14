import React, { Component } from "react";
import { connect } from "react-redux";
import { getOrders } from "../actions/index";
import OrderTableElement from "../components/elements/OrderTableElement";

class OrderList extends Component {
  componentDidMount() {
    // Call the API to get data
    this.props.getOrders();
  }

  render() {
    return (
      <div>
        <OrderTableElement orders={this.props.orders} />
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
