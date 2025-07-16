require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoute = require("./routes/web");

const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOSTNAME;

//config template engine
configViewEngine(app);
//Khai báo route
app.use("/", webRoute);

connection.query("select * from Users u", function (err, result, fields) {
  console.log("result>>>>", result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
