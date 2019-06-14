const initialState = {
  accounts: [],
  orders: [],
  currentAccountId: 1
};

//Reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ORDERS":
      return {
        ...state,
        orders: action.payload.orders
      };
    case "GET_ACCOUNTS":
      return {
        ...state,
        accounts: action.payload.accounts
      };
    case "ORDERS_LOADED":
      return {
        ...state,
        orders: action.payload.orders
      };
    case "ACCOUNTS_LOADED":
      return {
        ...state,
        accounts: action.payload.accounts
      };
    case "UPDATE_ACCOUNT_ID":
      return {
        ...state,
        currentAccountId: +action.payload
      };
    case "DATA_POSTED":
      let response = action.payload.data;
      let order = response.order;
      let currentOrders = response.currentOrders.orders;

      // Alert user of order success/failure
      alert(action.payload.data.result);

      //Splice orders to empty and return adjusted array
      if (state.orders !== currentOrders) {
        state.orders.splice(0, state.orders.length);
      }

      //If items remain just concat new order onto the existing
      let newOrders =
        order.quantity !== 0 ? currentOrders.concat(order) : currentOrders;

      // return Object.assign({}, state, {
      //   orders: state.orders.concat(newOrders)
      // });

      return {
        ...state,
        orders: state.orders.concat(newOrders)
      };

    default:
      return state;
  }
}

export default rootReducer;
