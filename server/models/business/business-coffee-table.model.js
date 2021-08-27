const mongoose = require("mongoose");
const beautifyUnique = require("mongoose-beautiful-unique-validation");

const BusinessCoffeeTableShema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    alias: {
      type: String,
      required: true,
    },
    business_detail: {
      status: {
        type: String,
      },
      identifier_number: {
        type: Number,
        required: true,
        unique: true,
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

BusinessCoffeeTableShema.plugin(beautifyUnique);

module.exports = mongoose.model(
  "businnesCoffeeTable",
  BusinessCoffeeTableShema
);
