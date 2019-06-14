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
    default:
      return state;
  }
}

export default rootReducer;
