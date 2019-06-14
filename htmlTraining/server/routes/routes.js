var MatcherApi = require("../app/matcher");
var Accounts = require("../data/Account");
var Orders = require("../data/Order");

let appRouter = function(app) {
  //Override CORS framework
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header("Access-Control-Allow-Methods", "GET,POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

  app.get("/getOrders", function(request, response) {
    let data = new Orders();
    response.status(200).send(data);
  });

  app.get("/getAccounts", function(request, response) {
    let data = new Accounts();
    response.status(200).send(data);
  });

  app.post("/postOrder", function(request, response) {
    console.log(request.body.payload);
    let result = new MatcherApi(request.body.payload);
    response.status(200).send(result);
  });
};

module.exports = appRouter;
