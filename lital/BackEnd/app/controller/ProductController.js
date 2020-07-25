var Product = require("../Model/ProductModel");

// get all products
exports.listallproducts = (req, res) => {
  Product.getAllProductFromDB(function (err, data) {
    res.send(data);
  });
};

// post new product
exports.postProduct = function (req, res) {
  const newproduct = new Product(req.body);
  Product.postProductIntoDB(newproduct, function (err, data) {
    res.send(data);
  });
};

// update product
exports.updateProduct = function (req, res) {
  const id = req.params.id;
  Product.updateProductInDB(req.body, id, function (err, data) {
    res.send(data);
  });
};
