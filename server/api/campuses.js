const router = require("express").Router();
const Campus = require("../db/models/Campus");

router.get("/", async (req, res, next) => {
  try {
    res.json(await Campus.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
