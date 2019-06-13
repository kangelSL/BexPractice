import React, { Component } from "react";
import { Card } from "react-bootstrap";
import OrderList from "../../container/orders/OrderList";
import OrderListPrivate from "../../container/orders/OrderListPrivate";
import OrderListAggregate from "../../container/orders/OrderListAggregated";

const OrderListComponent = () => (
    <div>
        <Card>
            <Card.Body>Private Order Book</Card.Body>
            <OrderListPrivate />
        </Card>
        <Card>
            <Card.Body>Aggregate Order Book</Card.Body>
            <OrderListAggregate />
        </Card>
        <Card>
            <Card.Body>Full List</Card.Body>
            <OrderList />
        </Card>
    </div>
);

export default OrderListComponent;
