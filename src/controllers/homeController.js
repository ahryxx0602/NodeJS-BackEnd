const connection = require("../config/database");
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../services/CRUDService");

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
const postUpdateUser = async (req, res) => {
  const { id, email, name, city } = req.body;
  try {
    await updateUser(email, name, city, id);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error inserting user!");
  }
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("update.ejs", { user: user });
};

const getDeletePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("delete.ejs", { user: user });
};

const postDeleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    await deleteUser(id);
    res.redirect("/");
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
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  getDeletePage,
};
