const db = require("./database");
const User = require("./models/User");
const Boat = require("./models/Boat");

User.hasMany(Boat);
Boat.belongsTo(User);

module.exports = {
  Boat,
  User,
  db,
};
