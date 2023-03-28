const router = require("express").Router();
const Student = require("../db/models/Student");

router.get("/", async (req, res, next) => {
  try {
    res.json(await Student.findAll());
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    res.json(student);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
