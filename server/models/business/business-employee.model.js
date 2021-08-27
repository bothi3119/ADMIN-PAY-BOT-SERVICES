const mongoose = require("mongoose");
const beautifyUnique = require("mongoose-beautiful-unique-validation");

const BusinessEmployeeShema = new mongoose.Schema(
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
      name: {
        type: String,
        required: true,
      },
      firstName: {
        type: String,
      },
      secondName: {
        type: String,
      },
      phone: {
        type: String,
        required: true,
      },
      salary: {
        type: Number,
      },
      userName: {
        type: String,
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

BusinessEmployeeShema.plugin(beautifyUnique);

module.exports = mongoose.model("businnesEmployee", BusinessEmployeeShema);
