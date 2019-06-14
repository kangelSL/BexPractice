import "../styles/App.css";
import React, { Component } from "react";

const AccountDropdownElement = ({ accounts, onAccountChange }) => (
  <div>
    <select style={{ width: 445, height: 25 }} onChange={onAccountChange}>
      {accounts &&
        accounts.map(account => (
          <option key={account.id} value={account.id}>
            {account.name}
          </option>
        ))}
    </select>
  </div>
);

export default AccountDropdownElement;
