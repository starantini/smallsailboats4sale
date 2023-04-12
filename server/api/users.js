const router = require("express").Router();
const { User } = require("../db");
const { Boat } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({ include: [Boat] });
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
      include: [Boat],
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
