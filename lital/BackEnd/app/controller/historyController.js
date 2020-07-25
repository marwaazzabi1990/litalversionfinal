var History = require("../Model/historyModel");

// get all history
exports.listallHistory = (req, res) => {
  History.getAllhistoryFromDB(function (err, data) {
    res.send(data);
  });
};

// post new history
exports.postHistory = function (req, res) {
  const newhistory = new History(req.body);
  History.postnewHistoryInDB(newhistory, function (err, data) {
    res.send(data);
    console.log(data);
  });
};
