var express = require("express");
var router = express.Router();
const Sentence = require("../models/sentence");

// Fetch all the sentences from the DB
router.get("/", async (req, res) => {
  try {
    let { perPage = 5, page = 0, sort = "_id", order = "desc" } = req.query;
    perPage = parseInt(perPage);
    page = parseInt(page);

    let [rows, totalCount] = await Promise.all([
      Sentence.find()
        .limit(perPage)
        .skip(perPage * page)
        .sort({ [sort]: order == "asc" ? 1 : -1 }),
      Sentence.countDocuments(),
    ]);

    res.json({ sentences: { numRows: rows?.length || 0, totalCount, rows } });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

/* Adding sentence into DB */
router.post("/", async (req, res) => {
  try {
    const { sentence, userId } = req.body;
    // set data to be inserted
    let data = {
      sentence,
      userId,
    };
    const sentenceInstance = new Sentence(data);
    let result = await sentenceInstance.save();
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
});

// update sentense
router.put("/", async (req, res) => {
  try {
    const { sentence, _id } = req.body;

    const where = { _id };
    const set = { sentence };
    let result = await Sentence.updateOne(where, set);

    res.status(200).json({ updated: result });
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
});

module.exports = router;
