import React, { Component } from "react";
import { connect } from "react-redux";
import OrderTable from "../../container/orders/OrderTable";

class OrderListRecent extends Component {
    getListItems() {
        if (typeof this.props.orders !== "undefined") {
            return this.props.orders.slice(1).slice(-5);
        } else {
            return {};
        }
    }

    render() {
        return (
            <div>
                <OrderTable orders={this.getListItems()} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        orders: state.orders
    };
}

export default connect(mapStateToProps)(OrderListRecent);
