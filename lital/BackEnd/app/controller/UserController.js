var User = require("../Model/UserModel");

// get all users
exports.getUsers = function (req, res) {
  User.getAllUsersFromDB(function (err, data) {
    res.send(data);
  });
};

// add new user
exports.postUser = function (req, res) {
  const newuser = new User(req.body);
  User.postUserIntoDB(newuser, function (err, data) {
    res.send(data);
  });
};

// Delete user
exports.deleteUser = function (req, res) {
  User.deleteUserFromDB(req.params.id, function (err, data) {
    res.send(data);
  });
};

// update user
exports.updateUser = function (req, res) {
  const id = req.params.id;
  User.updateUserInDB(req.body, id, function (err, data) {
    res.send(data);
  });
};
