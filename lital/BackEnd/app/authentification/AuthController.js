var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var cookieParser = require("cookie-parser");
router.use(cookieParser());

//Model of user
User = require("../Model/UserModel");

var jwt = require("jsonwebtoken");
var connection = require("../Model/db");
var jwtSecret = "lital";

var cookieParser = require("cookie-parser");

var app = express();
app.use(cookieParser());

router.post("/login", function (req, res) {
  connection.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [req.body.username, req.body.password],
    function (err, result) {
      if (err) res.send("Error on the server.");
      else if (result.length > 0) {
        var token = jwt.sign(
          { user_id: result[0].id, post: result[0].post },
          jwtSecret
        );
        res.cookie("token", token, { maxAge: 900000 }).send(token);
      } else {
        res.send("No user found.");
      }
    }
  );
});

module.exports = router;
