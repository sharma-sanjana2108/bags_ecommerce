const express = require("express");
const asynchandler = require("express-async-handler");
const {
  createProduct,
  getAllProducts,
  getProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
} = require("../controller/productController");
const {
  registerUser,
  loginUser,
  changePassword,
  logout,
  dashboard,
} = require("../controller/authController");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

// create product//
router.post("/", createProduct);

// get all products//
router.get("/", getAllProducts);

// get single product//
router.get("/:id", getProduct);

// replace product//
router.put("/:id", replaceProduct);

// update product//
router.patch("/:id", updateProduct);

// delete product//
router.delete("/:id", deleteProduct);


// ********AUTHENTICATION**********//

// User Register//
router.post("/register", asynchandler(registerUser));

// User Login//
router.post("/login", asynchandler(loginUser));

// private Routes//
router.post("/changepassword", verifyToken, asynchandler(changePassword));

// ********SEARCH Product**********//
router.post("/search", searchProducts);

// User Logout//

// ********Dashboard**********//
router.post("/dashboard", verifyToken, asynchandler(dashboard));

module.exports = router;
