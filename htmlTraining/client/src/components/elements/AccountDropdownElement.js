import "../styles/App.scss";
import React, { Component } from "react";
import "../../components/styles/Form.scss";

const AccountDropdownElement = ({ accounts, onAccountChange }) => (
  <div className="formBody" style={{ width: 200 }}>
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
