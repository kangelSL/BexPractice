import "../styles/App.css";
import React, { Component } from "react";
import OrderForm from "../../container/orders/OrderForm";

class OrderFormLayout extends Component {
  render() {
    return (
      <div>
        <OrderForm />
      </div>
    );
  }
}

export default OrderFormLayout;
