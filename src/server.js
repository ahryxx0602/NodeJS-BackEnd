require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoute = require("./routes/web");

const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOSTNAME;

//config template engine
configViewEngine(app);
//Khai báo route
app.use("/", webRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
