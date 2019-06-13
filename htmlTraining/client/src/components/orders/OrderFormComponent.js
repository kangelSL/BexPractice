import React, { Component } from "react";
import { Card } from "react-bootstrap";
import OrderForm from "../../container/orders/OrderForm";

const OrderFormComponent = () => (
    <div>
        <Card>
            <Card.Body>Order Books</Card.Body>
            <OrderForm />
        </Card>
    </div>
);

export default OrderFormComponent;
