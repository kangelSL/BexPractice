import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../actions/index";
import OrderTable from "../../container/orders/OrderTable";

class OrderList extends Component {
    componentDidMount() {
        // Call the API to get data
        this.props.getData();
    }

    render() {
        return (
            <div>
                <OrderTable orders={this.props.orders} />
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
        getData: order => dispatch(getData(order))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderList);
