const Sequelize = require("sequelize");
const db = require("../database");

const Campus = db.define("campuses", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
});

module.exports = Campus;
