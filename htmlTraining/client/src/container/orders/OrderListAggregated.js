import React, { Component } from "react";
import { connect } from "react-redux";
import { AggregateData } from "../../reducers/data/Aggregate";

class OrderListAggregated extends Component {
  getBuyListItems() {
    let aggregateArray = AggregateData(this.props.orders);

    let buyBook = aggregateArray[0];

    return buyBook.map((order, index) => {
      return (
        <tr key={index}>
          <th scope="col"> {order.price} </th>
          <th scope="col"> {order.quantity} </th>
        </tr>
      );
    });
  }

  getSellListItems() {
    let aggregateArray = AggregateData(this.props.orders);

    let sellBook = aggregateArray[1];

    return sellBook.map((order, index) => {
      return (
        <tr key={index}>
          <th scope="col"> {order.price} </th>
          <th scope="col"> {order.quantity} </th>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="row">
        <div className="column">
          <p>Buy</p>
          <table>
            <thead>
              <tr>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>{this.getBuyListItems()}</tbody>
          </table>
        </div>
        <div className="column">
          <p>Sell</p>
          <table>
            <thead>
              <tr>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>{this.getSellListItems()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders
  };
}

export default connect(mapStateToProps)(OrderListAggregated);
