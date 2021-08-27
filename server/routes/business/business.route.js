const express = require("express");

const controllerGetBusiness = require("../../controllers/business/business-get-info.controller");
const controllerSetBusiness = require("../../controllers/business/business-set-info.controller");

const route = express.Router();

const pathBase = "api/business";

//BusinessCoffeeTable = Mesas
route.post(`/${pathBase}/coffee-table`, controllerSetBusiness.setDataCoffeeTable);
route.get(`/${pathBase}/coffee-table`, controllerGetBusiness.getAllDataCoffeeTable);
     
//BusinessEmployee = Empleados
route.post(`/${pathBase}/employee`, controllerSetBusiness.setDataEmployee);
route.get(`/${pathBase}/employee`, controllerGetBusiness.getAllDataEmployee);

module.exports = route;
