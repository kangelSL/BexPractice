import axios from "axios";
import { UPDATE_ACCOUNT_ID } from "../constants/action-types";
import io from "socket.io-client";

let socket = io("http://localhost:8080/test");

export function updateAccountId(payload) {
  return { type: UPDATE_ACCOUNT_ID, payload };
}

export function updateForm(payload) {
  return { type: "UPDATE_FORM", payload };
}

export function getOrders() {
  return function(dispatch) {
    return socket.emit("room", {}, function(myData) {
      console.log("myData");
      console.log(myData);
      dispatch({ type: "ORDERS_LOADED", payload: myData });
    });
  };

  // return function(dispatch) {
  //   return fetch("http://localhost:3000/getOrders")
  //     .then(response => response.json())
  //     .then(json => {
  //       dispatch({ type: "ORDERS_LOADED", payload: json });
  //     });
  // };
}

export function getAccounts() {
  return function(dispatch) {
    return fetch("http://localhost:3000/getAccounts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "ACCOUNTS_LOADED", payload: json });
      });
  };
}

export function postData(payload) {
  return dispatch => {
    axios
      .post("http://localhost:3000/postOrder", {
        payload
      })
      .then(function(response) {
        dispatch({ type: "DATA_POSTED", payload: response });
      })
      .catch(function(response) {
        //handle error
        console.log(`Error:` + response);
        alert("An error occurred");
      });
  };
}
