let data = require("../data/index");

let ACTION_TYPES = {
  BUY: 1,
  SELL: 2
};

function MatcherApi(order) {
  let findOrder = {
    accountId: +order.accountId,
    quantity: +order.quantity,
    price: +order.price,
    action: order.action,
    acceptablePricePerCoin: +order.price / +order.quantity
  };

  let currentOrders = data().orders;

  let result = findTrade(findOrder, currentOrders);

  let resultString = result
    ? ["All traded"]
    : [findOrder.quantity + ` Bitcoins remain from trades`];

  let returnObj = {
    result: resultString,
    order: findOrder,
    currentOrders: currentOrders
  };

  return returnObj;
}

function findTrade(order, currentOrders) {
  let matchIndex = "";

  // Need to mutate original array so use loop
  forLoop: for (let i = 0; i < currentOrders.length; i++) {
    // Buy order
    if (+order.action === 1) {
      if (
        currentOrders[i].acceptablePricePerCoin <=
          order.acceptablePricePerCoin &&
        currentOrders[i].accountId !== order.accountId &&
        currentOrders[i].action === ACTION_TYPES.SELL
      ) {
        matchIndex = i;
        break forLoop;
      }
    } else {
      if (
        currentOrders[i].acceptablePricePerCoin >=
          order.acceptablePricePerCoin &&
        currentOrders[i].accountId !== order.accountId &&
        currentOrders[i].action === ACTION_TYPES.BUY
      ) {
        matchIndex = i;
        break forLoop;
      }
    }
  }

  if (typeof matchIndex === "number") {
    let trade = currentOrders[matchIndex];
    let difference = trade.quantity - order.quantity;

    //Make the trade
    makeTrade(order, trade);

    //Adjust the value of the order
    adjustOrder(trade, difference);

    if (trade.quantity === 0) {
      //Remove from array
      currentOrders.splice(matchIndex, 1);
    }

    //If user order has been handled return else call the function again
    if (order.quantity === 0) {
      return true;
    } else {
      findTrade(order, currentOrders);
    }
  }

  return;
}

function makeTrade(userTrade, trade) {
  userTrade.quantity =
    trade.quantity > userTrade.quantity
      ? 0
      : userTrade.quantity - trade.quantity;
  userTrade.price = userTrade.acceptablePricePerCoin * userTrade.quantity;
  userTrade.price = +userTrade.price.toFixed(2);
}

function adjustOrder(trade, difference) {
  trade.quantity = difference > 0 ? difference : 0;

  // Only need to adjust price if remaining quantity is above 0
  if (trade.quantity > 0) {
    trade.price = trade.acceptablePricePerCoin * trade.quantity;
    trade.price = +trade.price.toFixed(2);
  } else {
    //Otherwise remove from object
    trade.price = 0;
    trade.quantity = 0;
  }
}

module.exports = MatcherApi;
