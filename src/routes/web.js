const express = require("express");

const router = express.Router();

//Khai báo route
router.get("/", (req, res) => {
  res.send("Hello World!");
});
router.get("/ejs", (req, res) => {
  //   res.send("ABC!");
  res.render("sample.ejs");
});
router.get("/img", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router;
