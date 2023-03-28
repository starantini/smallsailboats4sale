const Sequelize = require("sequelize");

console.log("Database connection open");

const db = new Sequelize(`postgres://localhost:5432/acme_schools_db`, {
  logging: false,
});

module.exports = db;
