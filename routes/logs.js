var express = require("express");
var router = express.Router();
const Log = require("../models/logs");

// list logs of visitors
router.get("/", async (req, res) => {
  try {
    let { perPage = 5, page = 0 } = req.query;
    perPage = parseInt(perPage);
    page = parseInt(page);

    let [rows, totalCount] = await Promise.all([
      Log.find()
        .limit(perPage)
        .skip(perPage * page),
      Log.countDocuments(),
    ]);

    rows = rows?.map(({ _id, userAgent }) => ({
      _id,
      userAgent: JSON.parse(userAgent || "{}"),
    }));

    res.json({ visitors: { numRows: rows?.length || 0, totalCount, rows } });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

module.exports = router;
