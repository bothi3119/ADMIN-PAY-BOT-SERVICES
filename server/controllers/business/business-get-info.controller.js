const businessCoffeeTableModel = require("../../models/business/business-coffee-table.model");
const businessEmployeeModel = require("../../models/business/business-employee.model");

// Get all the data list to business coffee table;
exports.getAllDataCoffeeTable = (req, res) => {
  businessCoffeeTableModel.find({}, (error, data) => {
    if (error) {
      res.status(500).send(error.errors);
    } else {
      res.status(200).send({
        data: data,
      });
    }
  });
};

// Get the data by id business coffee table;
exports.getDataCoffeeTableById = (req, res) => {
  businessCoffeeTableModel.findOne(
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

// Get all the data list to business employee;
exports.getAllDataEmployee = (req, res) => {
  businessEmployeeModel.find({}, (error, data) => {
    if (error) {
      res.status(500).send(error.errors);
    } else {
      res.status(200).send({
        data: data,
      });
    }
  });
};

// Get the data by id business employee;
exports.getDataEmployeeById = (req, res) => {
  businessEmployeeModel.findOne(
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
