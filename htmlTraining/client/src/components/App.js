import React from "react";
import HeaderLayout from "./layout/HeaderLayout";
import ColumnLayout from "./layout/ColumnLayout";

import SidebarColumnLayout from "./layout/SidebarColumnLayout";
import LeftColumnLayout from "./layout/LeftColumnLayout";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <HeaderLayout
          title="Bitcoin Exchange | BEX"
          style="header header-small"
        />
        <HeaderLayout title="Trading" style="header header-right" />
      </div>
      <div>
        <SidebarColumnLayout header="BTC-GBP" style="column column-sidebar" />
        <LeftColumnLayout header="Order Books" style="column column-left" />

        <ColumnLayout header="Price Charts" style="column column-central" />
        <ColumnLayout header="Trade History" style="column column-right" />
      </div>
      <div />
    </div>
  );
}

export default App;
