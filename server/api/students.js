const router = require("express").Router();
const { Campus } = require("../db");
const { Student } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include: [Campus],
    });
    res.json(students);
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id, {
      include: [Campus],
    });
    res.json(student);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
