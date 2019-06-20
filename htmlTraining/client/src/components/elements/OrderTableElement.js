import React, { Component } from "react";
import "../styles/Table.scss";

const OrderTableElement = ({ orders }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
            <th scope="col"> {order.quantity} </th>
            <th scope="col"> {order.price} </th>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default OrderTableElement;
