const connection = require("../config/database");
const getAllUsers = async () => {
  const [users, fields] = await connection.query("SELECT * FROM Users");
  return users;
};

const createUser = async (email, name, city) => {
  const [result, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
  return result;
};

const getUserById = async (userId) => {
  let [results, fields] = await connection.query(
    "SELECT * FROM Users where id = ?",
    [userId]
  );

  let user = results && results.length > 0 ? results[0] : {};

  return user;
};
const updateUser = async (email, name, city, id) => {
  const [users, fields] = await connection.query(
    `Update Users 
        set email=?, name=?, city=? 
        where id = ?`,
    [email, name, city, id]
  );
};

const deleteUser = async (id) => {
  const [users, fields] = await connection.query(
    `Delete From Users 
          where id = ?`,
    [id]
  );
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
