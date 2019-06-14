// import {
//   DATA_LOADED,
//   DATA_POSTED,
//   UPDATE_ACCOUNT_ID
// } from "../constants/action-types";

// const initialState = {
//   accounts: [],
//   orders: [],
//   currentAccountId: 1
// };

// //Reducer
// export function reducer(state = {}, action = {}) {}

// //Action Creators
// export function changeAccountId() {}

// export function addTrade() {}

// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case DATA_LOADED:
//       return {
//         ...state,
//         orders: action.payload.orders,
//         accounts: action.payload.accounts
//       };

//     case DATA_POSTED:
//       let response = action.payload.data;
//       let order = response.order;
//       let currentOrders = response.currentOrders;

//       // Alert user of order success/failure
//       alert(action.payload.data.result);

//       if (state.orders !== currentOrders) {
//         //Splice orders to empty and return adjusted array
//         state.orders.splice(0, state.orders.length);
//       }

//       //If items remain just concat new order onto the existing
//       let newOrders =
//         order.quantity !== 0 ? currentOrders.concat(order) : currentOrders;

//       return Object.assign({}, state, {
//         orders: state.orders.concat(newOrders)
//       });

//     case UPDATE_ACCOUNT_ID:
//       return {
//         ...state,
//         currentAccountId: action.payload
//       };

//     default:
//       return state;
//   }
// }

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
    case "DATA_LOADED":
      return {
        ...state,
        orders: action.payload.orders,
        accounts: action.payload.accounts
      };
    default:
      return state;
  }
}

export default rootReducer;
