const catalogDrinksModel = require("../../models/catalog/catalog-drinks.model");
const catalogFoodsModel = require("../../models/catalog/catalog-foods.model");
const { parseId } = require("../../helpers/parse-id");

// Set data to catalog drinks;
exports.setDataCatalogDrinks = (req, res) => {
  const data = req.body;
  catalogDrinksModel.create(data, (error, docs) => {
    if (error) {
      res.status(500).send(error.errors);
    } else {
      res.status(200).send({
        data: docs,
      });
    }
  });
};

// Set data to catalog drinks;
exports.setDataCatalogFoods = (req, res) => {
  const data = req.body;
  catalogFoodsModel.create(data, (error, docs) => {
    if (error) {
      res.status(500).send(error.errors);
    } else {
      res.status(200).send({
        data: docs,
      });
    }
  });
};

// update data by id
exports.updateDataToCatalogDrinks = (req, res) => {
  const body = req.body;
  catalogDrinksModel.updateOne(
    { _id: parseId(req.params.id) },
    body,
    (error, docs) => {
      if (error) {
        res.status(500).send(error.errors);
      } else if (docs.nModified === 0) {
        res.status(500).send({ error: "Error al actualizar " });
      } else {
        res.status(200).send({
          data: docs,
        });
      }
    }
  );
};

// update data by id
exports.updateDataToCatalogFoods = (req, res) => {
  const body = req.body;
  catalogFoodsModel.updateOne(
    { _id: parseId(req.params.id) },
    body,
    (error, docs) => {
      if (error) {
        res.status(500).send(error.errors);
      } else if (docs.nModified === 0) {
        res.status(500).send({ error: "Error al actualizar " });
      } else {
        res.status(200).send({
          data: docs,
        });
      }
    }
  );
};

// Detele data by id
exports.deleteDataToCatalogDrinks = (req, res) => {
  catalogDrinksModel.deleteOne(
    { _id: parseId(req.params.id) },
    (error, docs) => {
      if (error) {
        res.status(500).send(error.errors);
      } else if (docs.deletedCount === 0) {
        res.status(500).send({ error: "Error al eliminar " });
      } else {
        res.status(200).send({
          data: docs,
        });
      }
    }
  );
};

// Detele data by id
exports.deleteDataToCatalogFoods = (req, res) => {
  catalogFoodsModel.deleteOne(
    { _id: parseId(req.params.id) },
    (error, docs) => {
      if (error) {
        res.status(500).send(error.errors);
      } else if (docs.deletedCount === 0) {
        res.status(500).send({ error: "Error al eliminar " });
      } else {
        res.status(200).send({
          data: docs,
        });
      }
    }
  );
};
