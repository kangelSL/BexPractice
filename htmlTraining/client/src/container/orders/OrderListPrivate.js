import React, { Component } from "react";
import { connect } from "react-redux";
import { getOrders } from "../../actions/index";
import OrderTableElement from "../../components/elements/OrderTableElement";
import HeaderLayout from "../../components/layout/HeaderLayout";

class OrderListPrivate extends Component {
  componentDidMount() {
    // Call websocket to get data
    this.props.getOrders();
  }

  getListItems() {
    if (typeof this.props.orders !== "undefined") {
      let currentAccountId = this.props.currentAccountId;

      return this.props.orders.filter(function(order) {
        return order.accountId == currentAccountId;
      });
    } else {
      return [];
    }
  }

  render() {
    return (
      <div>
        <HeaderLayout title="Account Orders" style="header-small" />
        <p>Current account: Account{this.props.currentAccountId}</p>
        <OrderTableElement orders={this.getListItems()} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders,
    currentAccountId: state.currentAccountId
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
)(OrderListPrivate);
