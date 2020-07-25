var mysql = require("mysql");

//local mysql db connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Lital",
});

connection.connect(function (err) {
  if (!err) {
    console.log("Database is connected");
  } else {
    console.log("Error while connecting with database");
  }
});

module.exports = connection;
