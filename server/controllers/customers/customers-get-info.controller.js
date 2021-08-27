const customerModel = require("../../models/customer/customer.model");

// Get all the customers data list;
exports.getAllDataCatalogDrinks = (req, res) => {
  customerModel.find({}, (error, data) => {
    if (error) {
      res.status(500).send(error.errors);
    } else {
      res.status(200).send({
        data: data,
      });
    }
  });
};

// Get customer data by the user name
exports.getDataById = (req, res) => {
  customerModel.findOne({ userName: req.params.userName }, (error, data) => {
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
  });
};
