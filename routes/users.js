var express = require("express");
var router = express.Router();
const User = require("../models/user");

/* Adding user into DB */
router.post("/", async function (req, res, next) {
  try {
    const { firstName, lastName, email, mobile, dob } = req.body;
    // set data to be inserted
    let data = {
      firstName,
      lastName,
      email,
      mobile,
      dob,
    };
    const user = new User(data);
    let result = await user.save();
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
});
/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
   res.json("fetching user details");
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
});

module.exports = router;
