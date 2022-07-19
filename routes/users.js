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

// list all users
router.get("/", async (req, res) => {
  try {
    let { perPage = 5, page = 0 } = req.query;
    perPage = parseInt(perPage);
    page = parseInt(page);

    let [rows, totalCount] = await Promise.all([
      User.find()
        .limit(perPage)
        .skip(perPage * page),
      User.countDocuments(),
    ]);

    res.json({ users: { numRows: rows?.length || 0, totalCount, rows } });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

module.exports = router;
