const router = require("express").Router();
const User = require("../db/models/User");

module.exports = router;

//post route for login
router.post("/login", async (req, res, next) => {
  try {
    //will send token and await the response from the reqbody
    //being authentificated.
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});
//auth post route for siging up
router.post("/signup", async (req, res, next) => {
  try {
    //user is created with the req.body
    const user = await User.create(req.body);
    //we send a newly created user to have a token generated for it
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});
//get a specific user by checking token
router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});
