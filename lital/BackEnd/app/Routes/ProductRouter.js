const express = require("express");
const router = express.Router();

var product = require("../controller/ProductController.js");

// get All Products
router.get("/getallproducts", product.listallproducts);

// Add product
router.post("/addproduct", product.postProduct);

// Update product
router.put("/updateproduct/:id", product.updateProduct);

module.exports = router;
