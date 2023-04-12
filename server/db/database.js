const Sequelize = require("sequelize");

console.log("Database connection open");

const db = new Sequelize(`postgres://localhost:5432/smallsailboats`, {
  logging: false,
});

module.exports = db;
