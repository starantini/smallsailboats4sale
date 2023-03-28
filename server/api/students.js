const router = require("express").Router();
const Student = require("../db/models/Student");

router.get("/", async (req, res, next) => {
  try {
    res.json(await Student.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
