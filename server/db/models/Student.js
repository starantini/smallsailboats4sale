const Sequelize = require("sequelize");
const db = require("../database");

const Student = db.define("students", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  gpa: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:
      "https://imgs.search.brave.com/FHYD5jfuz4XTliO1EFoi_DmB_GTBJdlhhqufNqpKSa8/rs:fit:300:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/ZVZtaXNDRFV5c1ZM/bHFxN1pjWW53QUFB/QSZwaWQ9QXBp",
  },
});

module.exports = Student;
