const businessCoffeeTableModel = require("../../models/business/business-coffee-table.model");
const businessEmployeeModel = require("../../models/business/business-employee.model");

// Set data to business coffee table;
exports.setDataCoffeeTable = (req, res) => {
  const data = req.body;
  businessCoffeeTableModel.create(data, (error, docs) => {
    if (error) {
      res.status(500).send(error.errors);
    } else {
      res.status(200).send({
        data: docs,
      });
    }
  });
};

//Set to business employee
exports.setDataEmployee = (req, res) => {
  const data = req.body;
  businessEmployeeModel.create(data, (error, docs) => {
    if (error) {
      res.status(500).send(error.errors);
    } else {
      res.status(200).send({
        data: docs,
      });
    }
  });
};
