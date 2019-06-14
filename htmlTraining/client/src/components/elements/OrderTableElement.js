import React, { Component } from "react";

const OrderTableElement = ({ orders }) => (
  <div>
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">Account No</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
            <th scope="col"> {order.accountId} </th>
            <th scope="col"> {order.quantity} </th>
            <th scope="col"> {order.price} </th>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default OrderTableElement;
