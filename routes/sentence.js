var express = require("express");
var router = express.Router();
const Sentence = require("../models/sentence");

/* Fetch all the sentences from the DB */
router.get("/", async function (req, res, next) {
  try {
    let result = await Sentence.find();
    result = result.map((element) => {
      return element.sentence;
    });
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
});

/* Adding sentence into DB */
router.post("/", async function (req, res, next) {
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

module.exports = router;