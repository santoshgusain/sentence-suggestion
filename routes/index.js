var express = require("express");
var router = express.Router();

router.use("/authenticate", require("./authenticate"));
router.use("/user", require("./users"));
router.use("/sentence", require("./sentence"));
router.use("/logs", require("./logs"));

module.exports = router;
