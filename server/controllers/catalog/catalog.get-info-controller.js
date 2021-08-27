const catalogDrinksModel = require("../../models/catalog/catalog-drinks.model");
const catalogFoodsModel = require("../../models/catalog/catalog-foods.model");

// Get all the data catalog drinks;
exports.getAllDataCatalogDrinks = (req, res) => {
  catalogDrinksModel.find({}, (error, data) => {
    if (error) {
      res.status(500).send(error.errors);
    } else {
      res.status(200).send({
        data: data,
      });
    }
  });
};

// Get the data by id catalog drinks;
exports.getDataCatalogDrinksById = (req, res) => {
  catalogDrinksModel.findOne(
    { userName: req.params.userName },
    (error, data) => {
      if (error) {
        res.status(500).send(error.errors);
      } else if (data === null) {
        res.status(201).send({
          message: "consulta vacia",
        });
      } else {
        res.status(200).send({
          data,
        });
      }
    }
  );
};

//------------------------------------------------------->

// Get all the data catalog foods;
exports.getAllDataCatalogFoods = (req, res) => {
  catalogFoodsModel.find({}, (error, data) => {
    if (error) {
      res.status(500).send(error.errors);
    } else {
      res.status(200).send({
        data: data,
      });
    }
  });
};

// Get the data by id catalog foods;
exports.getDataCatalogFoodsById = (req, res) => {
  catalogFoodsModel.findOne(
    { userName: req.params.userName },
    (error, data) => {
      if (error) {
        res.status(500).send(error.errors);
      } else if (data === null) {
        res.status(201).send({
          message: "consulta vacia",
        });
      } else {
        res.status(200).send({
          data,
        });
      }
    }
  );
};
