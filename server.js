const express = require("express");
const bodyParser = require("body-parser");
const initDB = require("./server/config/db");

const app = express();
const port = 3001;

// import routes
const customerRoute = require("./server/routes/customer/customer.route");
const business = require("./server/routes/business/business.route");
const catalog = require("./server/routes/catalog/catalog.route");

//apps uses
app.use(
  bodyParser.json({
    limit: "20mb",
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "20mb",
    extended: true,
  })
);

app.use(customerRoute);
app.use(business);
app.use(catalog);

// Inits
app.listen(port, () => {
  console.log("app runing ....");
});
initDB();
