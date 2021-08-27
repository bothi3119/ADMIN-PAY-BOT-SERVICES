const express = require("express");

const controllerGetCustomer = require("../../controllers/customers/customers-get-info.controller");
const controllerSetCustomer = require("../../controllers/customers/customers-set-info.controller");

const route = express.Router();

const path = "api/customer";

route.get(`/${path}/:userName`, controllerGetCustomer.getDataById);
route.get(`/${path}`, controllerGetCustomer.getAllDataCatalogDrinks);
route.post(`/${path}`, controllerSetCustomer.setDataCustomer);

module.exports = route;
