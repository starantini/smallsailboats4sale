const router = require("express").Router();
const Campus = require("../db/models/Campus");
const Student = require("../db/models/Student");

router.get("/", async (req, res, next) => {
  try {
    res.json(await Campus.findAll());
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    res.json(campus);
  } catch (error) {
    next(error);
  }
});
router.get("/:id/students", async (req, res, next) => {
  try {
    const studentBody = await Campus.findAll({
      where: {
        id: req.params.id,
      },
      include: [Student],
    });
    res.json(studentBody);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
