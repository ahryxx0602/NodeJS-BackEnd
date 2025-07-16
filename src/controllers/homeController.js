const connection = require("../config/database");
const { getAllUsers, createUser } = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  try {
    const users = await getAllUsers();
    return res.render("home.ejs", { listUsers: users });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error fetching users!");
  }
};

const getEJSPage = (req, res) => {
  res.render("sample.ejs");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;
  try {
    await createUser(email, name, city);
    return res.send("Created succeed!");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error inserting user!");
  }
};

module.exports = {
  getHomePage,
  getEJSPage,
  postCreateUser,
  getCreatePage,
};
