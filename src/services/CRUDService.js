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

module.exports = {
  getAllUsers,
  createUser,
};
