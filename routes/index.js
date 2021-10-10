var express = require("express");
var router = express.Router();

router.use("/user",require("./users"));
router.use("/sentence",require("./sentence"));

module.exports = router;
