const express = require("express");

const router = express.Router();

const {
  getHomePage,
  getEJSPage,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
//Khai báo route
router.get("/", getHomePage);
router.get("/create", getCreatePage);
router.get("/ejs", getEJSPage);
router.get("/img", getEJSPage);

router.post("/create-user", postCreateUser);

module.exports = router;
