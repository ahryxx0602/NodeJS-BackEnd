const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/ejs", (req, res) => {
  //   res.send("ABC!");
  res.render("sample");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
