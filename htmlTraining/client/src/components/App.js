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
import "./styles/Column.scss";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="colSidebar">
          <HeaderLayout title="Bitcoin Exchange | BEX" style="header" />
          <HeaderLayout title="BTC_GBP" style="header-small" />
          <SidebarColumnLayout />
        </div>
        <div className="colLeft">
          <HeaderLayout title="Trading" style="header" />
          <HeaderLayout title="Order Books" style="header-small" />
          <LeftColumnLayout />
        </div>

        <div className="colCentre">
          <HeaderLayout title="Price Charts" style="header" />
          <CentralColumnLayout />
        </div>

        <div className="colRight">
          <HeaderLayout title="Trade History" style="header" />
          <HeaderLayout title="Recents" style="header-small" />
          <RightColumnLayout />
        </div>
      </div>
    </div>
  );
}

export default App;
