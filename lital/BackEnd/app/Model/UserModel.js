var sql = require("./db.js");

//User object constructor
class User {
  constructor(user) {
    this.id = user.id;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.username = user.username;
    this.password = user.password;
    this.post = user.post;
  }
  // Get all users from database
  static getAllUsersFromDB(result) {
    sql.query("SELECT * FROM users", function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  // Post user in database
  static postUserIntoDB(newuser, result) {
    sql.query("INSERT INTO users SET ?", newuser, function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  // Delete user from database
  static deleteUserFromDB(id, result) {
    sql.query(`DELETE FROM users WHERE id = ${id}`, function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  // Update user in database
  static updateUserInDB(newuser, id, result) {
    sql.query(`UPDATE users SET ?  WHERE id = ?`, [newuser, id], function (
      err,
      res
    ) {
      if (err) {
        result(null, res);
      } else {
        result(err, res);
      }
    });
  }
}

module.exports = User;
