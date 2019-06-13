import React, { Component } from "react";
import { connect } from "react-redux";
import { postData } from "../../actions/index";

class ConnectedForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accountId: this.props.currentAccountId,
            action: 1,
            price: "",
            quantity: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        // Use callback to get any updates to current account id
        this.setState({ accountId: this.props.currentAccountId }, () =>
            this.submitCallback()
        );

        //Clear visible fields
        document.getElementById("quantity").value = "";
        document.getElementById("price").value = "";
    }

    submitCallback() {
        this.props.postData(this.state);

        this.setState({ quantity: "" });
        this.setState({ price: "" });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{ padding: 5 }}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="quantity"
                        value={this.quantity}
                        placeholder="Quantity"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        value={this.price}
                        placeholder="Price"
                        onChange={this.handleChange}
                    />
                    <br />
                    <select
                        id="action"
                        value={this.action}
                        onChange={this.handleChange}
                        style={{ width: 445, height: 25 }}
                    >
                        <option value="1">Buy</option>
                        <option value="2">Sell</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SUBMIT
                </button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentAccountId: state.currentAccountId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        postData: order => dispatch(postData(order))
    };
}

const OrderForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedForm);

export default OrderForm;
