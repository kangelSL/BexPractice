import React, { Component } from "react";
import {
  Form,
  Button,
  FormControl,
  FormGroup,
  Dropdown
} from "react-bootstrap";

//Needs further work to refactor order form

export default class OrderFormElement extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    // this.setState({
    //   accountId: this.props.currentAccountId,
    //   action: this.props.action
    // });
  }

  handleSubmit() {
    this.props.handleSubmit([
      this.props.action,
      this.props.quantity,
      this.props.price,
      this.props.currentAccountId
    ]);
  }

  render() {
    const { quantity, price, action, currentAccountId } = this.props;
    return (
      <div>
        <Form>
          <FormGroup>
            <FormControl
              type="quantity"
              id="quantity"
              placeholder="Enter quantity"
              className="formElement"
              value={this.props.quantity}
              onChange={this.handleChange}
            />
            <FormControl
              type="price"
              id="price"
              placeholder="Enter price"
              className="formElement"
              value={this.props.price}
              onChange={this.handleChange}
            />
            <select
              className="formElement"
              value={this.props.action}
              onChange={this.handleChange}
              id="action"
              value={this.props.action}
              onChange={this.handleChange}
            >
              <option value="1">Buy</option>
              <option value="2">Sell</option>
            </select>
          </FormGroup>

          <Button className="buttonStyling" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
// const OrderFormElement = ({
//   handleChange,
//   handleSubmit,
//   action,
//   price,
//   quantity
// }) => (

// );

// export default OrderFormElement;
