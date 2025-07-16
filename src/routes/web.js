const express = require("express");

const router = express.Router();

const {
  getHomePage,
  getEJSPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  getDeletePage,
} = require("../controllers/homeController");
//Khai báo route
router.get("/", getHomePage);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);
router.get("/delete/:id", getDeletePage);

router.get("/ejs", getEJSPage);
router.get("/img", getEJSPage);

router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
router.post("/delete-user", postDeleteUser);

module.exports = router;
