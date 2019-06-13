import React from "react";
import OrderFormComponent from "../components/orders/OrderFormComponent";
import OrderListComponent from "../components/orders/OrderListComponent";
import AccountDropdownComponent from "../components/account/AccountDropdownComponent";
import OrderListRecent from "../container/orders/OrderListRecent";

function App() {
    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row">
                    <div
                        className="col-sm-4"
                        style={{ paddingTop: 15 }}
                        id="column1"
                    >
                        <h1>Order Form</h1>
                        <AccountDropdownComponent />
                        <OrderFormComponent />

                        <h1>Recent Trades</h1>
                        <OrderListRecent />
                    </div>

                    <div
                        className="col-sm-8"
                        style={{ paddingTop: 15 }}
                        id="column2"
                    >
                        <h1>Order Books</h1>
                        <OrderListComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
