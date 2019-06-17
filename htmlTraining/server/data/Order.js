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

    // Sell data
    new Order(1, 180, 70, 2),
    new Order(1, 170, 80, 2),
    new Order(1, 160, 90, 2),
    new Order(1, 180, 100, 2),

    new Order(1, 70, 160, 2),
    new Order(1, 60, 130, 2),
    new Order(1, 55, 120, 2),
    new Order(1, 50, 100, 2),
    new Order(1, 45, 95, 2),
    new Order(1, 40, 90, 2),
    new Order(1, 35, 85, 2),

    //Centre point
    new Order(1, 15, 75, 2),
    new Order(1, 10, 70, 2),

    new Order(1, 10, 71, 1),
    new Order(1, 15, 75, 1),

    // Buy data
    new Order(1, 100, 120, 1),
    new Order(1, 100, 130, 1),

    new Order(1, 160, 200, 1),
    new Order(1, 170, 200, 1),
    new Order(1, 150, 200, 1),
    new Order(1, 190, 200, 1)
  ];
}

function getData() {
  return {
    orders: getOrders()
  };
}

module.exports = getData;
