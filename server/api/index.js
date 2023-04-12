const router = require("express").Router();

router.use("/boats", require("./boats"));
router.use("/users", require("./users"));

module.exports = router;
