const Sequelize = require("sequelize");
const db = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SALT_ROUNDS = 5;

const User = db.define("User", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
  },
});

module.exports = User;

/**
 * instanceMethods
 */

//compares the password input with the one in the database for the user
User.prototype.correctPassword = function (candidatePwd) {
  //we need to compare the plain version to an encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password);
};
//generates a token with the user id
User.prototype.generateToken = function () {
  //uses the process.env.JWT secret phrase to do so.
  return jwt.sign({ id: this.id }, process.env.JWT);
};

/**
 * classMethods
 */

//finds the user where the username matches and then calls the above
//correct password function to check that they match, so that the user
//can sign in
User.authenticate = async function ({ username, password }) {
  console.log(process.env.JWT);
  const user = await this.findOne({ where: { username } });
  //if user doesn't exist, or if the returned promise for that user,
  //doesn't exists returns error
  if (!user || !(await user.correctPassword(password))) {
    const error = Error("Incorrect username/password");
    error.status = 401;
    throw error;
  }
  console.log(process.env.JWT);
  //if nither case is false, then we generate a token for that user
  return user.generateToken();
};
//finds a User by its Json web token
User.findByToken = async function (token) {
  try {
    //id is destructured from the token so that we can search
    //for that user
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = User.findByPk(id);
    //if user doesn't exist than throw error
    if (!user) {
      throw "nooo";
    }
    return user;
  } catch (ex) {
    const error = Error("bad token");
    error.status = 401;
    throw error;
  }
};

/**
 * hooks
 */

const hashPassword = async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));
