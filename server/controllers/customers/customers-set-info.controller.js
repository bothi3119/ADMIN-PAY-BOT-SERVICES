const customerModel = require("../../models/customer/customer.model");

exports.setDataCustomer = (req, res) => {
  const data = req.body;
  customerModel.create(data, (error, docs) => {
    if (error) {
      res.status(500).send(error.errors);
    } else {
      res.status(200).send({
        data: docs,
      });
    }
  });
};
