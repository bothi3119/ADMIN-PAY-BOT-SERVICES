const mongoose = require("mongoose");

const parseId = (id) => {
  return mongoose.Types.ObjectId(id);
};

exports.parseId = parseId;
