const router = require("express").Router();
const { User } = require("../db");
const { Boat } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const boats = await Boat.findAll({
      include: [User],
    });
    console.log(boats);
    res.json(boats);
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const boat = await Boat.findByPk(req.params.id, {
      include: [User],
    });
    res.json(boat);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Boat.create(req.body), { include: [User] });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const boat = await Boat.findByPk(req.params.id);
    await boat.destroy();
    res.send(boat);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const boat = await Boat.findByPk(req.params.id);
    res.send(await boat.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
