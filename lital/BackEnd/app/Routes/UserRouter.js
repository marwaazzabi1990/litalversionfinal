const express = require("express");
const router = express.Router();

var user = require("../controller/UserController.js");

// Get All Products
router.get("/getallusers", user.getUsers);

// Add product
router.post("/adduser", user.postUser);

// Delete product
router.delete("/deleteuser/:id", user.deleteUser);

// Update product
router.put("/updateuser/:id", user.updateUser);

module.exports = router;
