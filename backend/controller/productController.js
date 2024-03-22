const product = require("../models/productModel.js");
const bcrypt = require("bcrypt");

// create product//

const createProduct = async (req, res) => {
  const prd = new product(req.body);

  const doc = await prd.save();

  if (doc) {
    res.status(200).json(doc);
  } else {
    res.status(400);
  }
};

// get all product//
const getAllProducts = async (req, res) => {
  const products = await product.find();
  res.json(products);
};

// get single product//
const getProduct = async (req, res) => {
  const id = req.params.id;
  const products = await product.findById(id);
  res.status(200).json(products);
};

// replace product//
const replaceProduct = async (req, res) => {
  const id = req.params.id;
  const products = await product.findOneAndReplace({ _id: id }, req.body, {
    new: true,
  });
  res.status(200).json(products);
};

// upadte product//
const updateProduct = async (req, res) => {
  const id = req.params.id;
  const products = await product.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  res.status(200).json(products);
};

// Delete product//
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const products = await product.findByIdAndDelete(id);
  res.status(200).json(products);
};

// Search product//
const searchProducts = async (req, res) => {
  const query = req.query.query;
  const result = await product.find({ title: query });
  res.send(result);
};

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};
