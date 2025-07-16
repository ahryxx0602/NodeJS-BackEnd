const connection = require("../config/database");

const getHomePage = (req, res) => {
  let users = [];
  connection.query("select * from Users u", function (err, result, fields) {
    users = result;
    console.log("result homepage>>>>", result);
    res.send(JSON.stringify(users));
  });
};

const getEJSPage = (req, res) => {
  res.render("sample.ejs");
};

const getAhryxxPage = (req, res) => {};

module.exports = {
  getHomePage,
  getEJSPage,
  getAhryxxPage,
};
