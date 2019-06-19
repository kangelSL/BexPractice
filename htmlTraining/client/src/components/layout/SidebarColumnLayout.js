import "../styles/App.scss";
import React, { Component } from "react";
import OrderFormLayout from "./OrderFormLayout";
import AccountDropdown from "../../container/AccountDropdown";

class SidebarColumnLayout extends Component {
  render() {
    return (
      <div className={this.props.style}>
        <p>{this.props.header}</p>
        <AccountDropdown />
        <OrderFormLayout />
      </div>
    );
  }
}

export default SidebarColumnLayout;
