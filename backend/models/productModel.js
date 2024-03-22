const mongoose = require("mongoose");

const { Schema } = require("mongoose");

const productSchema = new Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },

  category: {
    type: String,
  },

  price: {
    type: String,
  },

  image: {
    type: String,
  },
});

const product = mongoose.model("bagProducts", productSchema);

module.exports = product;
