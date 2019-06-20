import React, { Component } from "react";
import { connect } from "react-redux";
import OrderTableElement from "../../components/elements/OrderTableElement";
import HeaderLayout from "../../components/layout/HeaderLayout";

class OrderListPrivate extends Component {
  getListItems() {
    if (typeof this.props.orders !== "undefined") {
      let currentAccountId = this.props.currentAccountId;

      return this.props.orders.filter(function(order) {
        return order.accountId == currentAccountId;
      });
    } else {
      return {};
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

export default connect(mapStateToProps)(OrderListPrivate);
