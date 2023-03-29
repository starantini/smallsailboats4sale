const db = require("./database");
const Campus = require("./models/Campus");
const Student = require("./models/Student");

Campus.hasMany(Student);
// Campus.belongsTo(Student);

// Student.hasOne(Campus);
Student.belongsTo(Campus);

// console.log(Object.keys(Student.__proto__));

module.exports = {
  Student,
  Campus,
  db,
};
