const mongoose = require("mongoose");
const beautifyUnique = require("mongoose-beautiful-unique-validation");

const CustomerShema = new mongoose.Schema(
  {
    holderName: {
      type: String,
    },
    userName: {
      type: String,
      required: true,
      unique: true
    },
    profile: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
);

CustomerShema.plugin(beautifyUnique);

module.exports = mongoose.model("customer", CustomerShema);
