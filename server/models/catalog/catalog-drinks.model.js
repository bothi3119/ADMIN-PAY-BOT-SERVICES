const mongoose = require("mongoose");
const beautifyUnique = require("mongoose-beautiful-unique-validation");

const CatalogDrinksShema = new mongoose.Schema(
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
      id_identifier: {
        type: String,
        required: true,
        unique: true,
      },
      status: {
        type: String,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        required: true,
        type: Number,
      },
      stock_total: {
        type: Number,
      },
      img_url: {
        type: String,
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

CatalogDrinksShema.plugin(beautifyUnique);

module.exports = mongoose.model("catalogDrinks", CatalogDrinksShema);
