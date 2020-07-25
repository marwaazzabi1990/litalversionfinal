var sql = require("./db.js");

//Product object constructor
class Product {
  constructor(product) {
    this.name = product.name;
    this.reference = product.reference;
    this.type = product.type;
    this.collection = product.collection;
    this.brand = product.brand;
    this.product_status = product.product_status;
    this.mesures = product.mesures;
    this.color = product.color;
    this.picture = product.picture;
    this.location = product.location;
    this.box = product.box;
    this.quantity = product.quantity;
    this.comment = product.comment;
  }

  // Get all products from database
  static getAllProductFromDB(result) {
    sql.query("Select * from products", function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  // Post product in database
  static postProductIntoDB(newproduct, result) {
    sql.query("INSERT INTO products set ?", newproduct, function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  // Delete product from database
  static deleteProductFromDB(id, result) {
    sql.query(`DELETE FROM products WHERE id = ?`, id, function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  // Update product in database
  static updateProductInDB(newproduct, id, result) {
    sql.query("UPDATE products SET ? WHERE id = ?", [newproduct, id], function (
      err,
      res
    ) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }
}

module.exports = Product;
