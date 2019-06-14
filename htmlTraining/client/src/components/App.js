import React from "react";
import HeaderLayout from "./layout/HeaderLayout";
import SidebarColumnLayout from "./layout/SidebarColumnLayout";
import LeftColumnLayout from "./layout/LeftColumnLayout";
import CentralColumnLayout from "./layout/CentralColumnLayout";
import RightColumnLayout from "./layout/RightColumnLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="col1">
          <HeaderLayout
            title="Bitcoin Exchange | BEX"
            style="header header-small"
          />

          <SidebarColumnLayout header="BTC-GBP" />
        </div>

        <div className="col2">
          <HeaderLayout title="Trading" />
          <LeftColumnLayout header="Order Books" />
        </div>

        <div className="col3">
          <CentralColumnLayout header="Price Charts" />
        </div>

        <div className="col4">
          <RightColumnLayout header="Trade History" />
        </div>
      </div>
    </div>
  );
}

export default App;
