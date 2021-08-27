const express = require("express");

const controllerGetCatalog = require("../../controllers/catalog/catalog.get-info-controller");
const controllerSetCatalog = require("../../controllers/catalog/catalog-set-info.controller");

const route = express.Router();

const pathBase = "api/catalog";

//CatalogDrinks= Bebidas
route.post(`/${pathBase}/drinks`, controllerSetCatalog.setDataCatalogDrinks);
route.delete(`/${pathBase}/drinks/:id`, controllerSetCatalog.deleteDataToCatalogDrinks);
route.put(`/${pathBase}/drinks/:id`, controllerSetCatalog.updateDataToCatalogDrinks);
route.get(`/${pathBase}/drinks`, controllerGetCatalog.getAllDataCatalogDrinks);

//CatalogFoods= Comidas
route.post(`/${pathBase}/foods`, controllerSetCatalog.setDataCatalogFoods);
route.delete(`/${pathBase}/foods/:id`, controllerSetCatalog.deleteDataToCatalogFoods);
route.put(`/${pathBase}/foods/:id`, controllerSetCatalog.updateDataToCatalogFoods);
route.get(`/${pathBase}/foods`, controllerGetCatalog.getAllDataCatalogFoods);

module.exports = route;
