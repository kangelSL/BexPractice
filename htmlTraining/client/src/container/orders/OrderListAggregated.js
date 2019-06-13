import React, { Component } from "react";
import { connect } from "react-redux";
import { AggregateData } from "../../reducers/Data/Aggregate";

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
            <div>
                <p>Buy</p>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>{this.getBuyListItems()}</tbody>
                </table>

                <p>Sell</p>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>{this.getSellListItems()}</tbody>
                </table>
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
