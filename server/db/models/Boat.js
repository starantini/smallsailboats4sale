const Sequelize = require("sequelize");
const db = require("../database");
const User = require("./User");

const Boat = db.define("boats", {
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  length: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:
      "https://imgs.search.brave.com/FHYD5jfuz4XTliO1EFoi_DmB_GTBJdlhhqufNqpKSa8/rs:fit:300:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/ZVZtaXNDRFV5c1ZM/bHFxN1pjWW53QUFB/QSZwaWQ9QXBp",
  },
  UserId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
});

module.exports = Boat;
