import React, { Component } from "react";
import { connect } from "react-redux";
import { postData } from "../../actions/index";
import { Form, Button, FormControl, FormGroup } from "react-bootstrap";
import "../../components/styles/Button.scss";
import "../../components/styles/Form.scss";

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
      <div className="formBody">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <FormControl
              type="quantity"
              id="quantity"
              placeholder="Enter quantity"
              className="formElement"
              value={this.quantity}
              onChange={this.handleChange}
            />
            <FormControl
              type="price"
              id="price"
              placeholder="Enter price"
              className="formElement"
              value={this.price}
              onChange={this.handleChange}
            />
            <div className="formBody">
              <select
                className="formElement"
                id="action"
                value={this.action}
                onChange={this.handleChange}
              >
                <option value="1">Buy</option>
                <option value="2">Sell</option>
              </select>
            </div>
          </FormGroup>

          <Button className="buttonStyling" type="submit">
            Submit
          </Button>
        </Form>
      </div>
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
