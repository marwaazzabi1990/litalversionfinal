var sql = require("./db.js");

//User object constructor
class History {
  constructor(history) {
    this.id = history.id;
    this.date = history.date;
    this.action = history.action;
    this.product_reference = history.product_reference;
    this.user_id = history.user_id;
  }
  // Get all history from database
  static getAllhistoryFromDB(result) {
    sql.query("SELECT * FROM history", function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  static postnewHistoryInDB(newhistory, result) {
    sql.query("INSERT INTO history set ?", newhistory, function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }
}

module.exports = History;
