const express = require("express");
const router = express.Router();

var history = require("../controller/historyController");

// get All Products
router.get("/getallhistory", history.listallHistory);

// post new history
router.post("/addhistory", history.postHistory);

module.exports = router;
