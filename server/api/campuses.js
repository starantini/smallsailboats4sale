const router = require("express").Router();
const { Campus } = require("../db");
const { Student } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  console.log(Student, "is this firing");
  try {
    const campus = await Campus.findOne({
      where: {
        id: req.params.id,
      },
      include: [Student],
    });
    res.json(campus);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Campus.create(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
