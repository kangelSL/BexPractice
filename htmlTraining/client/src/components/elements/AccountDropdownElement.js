import "../styles/App.scss";
import React, { Component } from "react";

const AccountDropdownElement = ({ accounts, onAccountChange }) => (
  <div>
    <select className="formElement" onChange={onAccountChange}>
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
