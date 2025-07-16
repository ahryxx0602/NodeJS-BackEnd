const express = require("express");

const router = express.Router();

const { getHomePage, getEJSPage } = require("../controllers/homeController");
//Khai báo route
router.get("/", getHomePage);
router.get("/ejs", getEJSPage);
router.get("/img", getEJSPage);

module.exports = router;
