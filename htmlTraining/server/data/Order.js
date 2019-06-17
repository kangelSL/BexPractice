class Order {
  constructor(accountId, quantity, price, action) {
    this.accountId = +accountId;
    this.price = +price;
    this.quantity = +quantity;
    this.action = +action;

    this.acceptablePricePerCoin = this.price / this.quantity;
  }

  adjustOrder(reduceQuantity) {
    this.quantity =
      reduceQuantity > this.quantity ? 0 : this.quantity - reduceQuantity;
    this.price = this.acceptablePricePerCoin * this.quantity;
  }
}

function getOrders() {
  return [
    // new Order(1, 45, 15, 1),
    // new Order(1, 25, 15, 1),
    // new Order(1, 20, 10, 1),
    // new Order(1, 45, 20, 1),
    // new Order(1, 50, 20, 1),
    // new Order(2, 200, 150, 1),
    // new Order(2, 210, 100, 1),
    // new Order(2, 500, 250, 1),
    // new Order(2, 30, 15, 1),
    // new Order(3, 80, 60, 1),
    // new Order(3, 100, 120, 1),
    // new Order(3, 20, 40, 1),
    // new Order(3, 40, 80, 1),
    // new Order(4, 60, 50, 1),
    // new Order(4, 80, 70, 1),
    // new Order(4, 90, 180, 1),
    // new Order(4, 110, 100, 1),
    // new Order(5, 130, 100, 1),
    // new Order(5, 150, 110, 1),
    // new Order(5, 170, 150, 1),
    // new Order(5, 190, 170, 1),
    // new Order(1, 100, 200, 2),
    // new Order(1, 200, 250, 2),
    // new Order(1, 300, 350, 2),
    // new Order(1, 400, 450, 2),
    // new Order(2, 500, 600, 2),
    // new Order(2, 50, 100, 2),
    // new Order(2, 150, 100, 2),
    // new Order(2, 250, 225, 2),
    // new Order(3, 350, 300, 2),
    // new Order(3, 450, 400, 2),
    // new Order(3, 550, 500, 2),
    // new Order(3, 30, 40, 2),
    // new Order(4, 60, 50, 2),
    // new Order(4, 90, 80, 2),
    // new Order(4, 120, 110, 2),
    // new Order(4, 180, 200, 2),
    // new Order(4, 20, 200, 2),
    // new Order(5, 210, 300, 2),
    // new Order(5, 240, 260, 2),
    // new Order(5, 270, 300, 2),
    // new Order(5, 330, 400, 2)

    //accountId, quantity, price, action

    //Sell data
    new Order(1, 200, 10, 2),
    new Order(1, 200, 10, 2),
    new Order(1, 200, 15, 2),
    new Order(1, 180, 20, 2),
    new Order(1, 160, 20, 2),
    new Order(1, 140, 25, 2),
    new Order(1, 120, 30, 2),
    new Order(1, 100, 35, 2),
    new Order(1, 80, 40, 2),
    new Order(1, 60, 45, 2),
    new Order(1, 40, 50, 2),
    new Order(1, 20, 55, 2),
    // new Order(1, 200, 65, 2),
    // new Order(1, 200, 70, 2),
    // new Order(1, 200, 75, 2),
    // new Order(1, 200, 80, 2),
    // new Order(1, 200, 85, 2),
    // new Order(1, 200, 90, 2),
    new Order(1, 50, 100, 2),

    //Buy data
    new Order(1, 0, 0, 1),
    new Order(1, 5, 5, 1),
    new Order(1, 6, 5, 1),
    new Order(1, 7, 5, 1),
    new Order(1, 8, 5, 1),
    new Order(1, 9, 5, 1),
    new Order(1, 10, 5, 1),
    new Order(1, 10, 6, 1),
    new Order(1, 10, 7, 1),
    new Order(1, 10, 8, 1),
    new Order(1, 10, 9, 1),
    new Order(1, 10, 10, 1),
    new Order(1, 10, 15, 1),
    new Order(1, 15, 15, 1),
    new Order(1, 15, 20, 1),
    new Order(1, 20, 20, 1)
  ];
}

function getData() {
  return {
    orders: getOrders()
  };
}

module.exports = getData;
