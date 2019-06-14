import "../styles/App.css";
import React, { Component } from "react";
import OrderForm from "../../container/orders/OrderForm";
import { Panel } from "react-bootstrap";

class OrderFormLayout extends Component {
  render() {
    return (
      <div>
        <Panel>
          <OrderForm />
        </Panel>
      </div>
    );
  }
}

export default OrderFormLayout;
