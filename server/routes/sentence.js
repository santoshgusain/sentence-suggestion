var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const sentences = [
    "The horse raced past the barn fell.",
    "The complex houses married and single soldiers and their families.",
    "The rat the cat the dog chased killed ate the malt.",
    "Pin a footer to the bottom of the viewport.The footer will move as the main element of the page grows.",
    "Anyone who feels that if so many more students whom we haven’t actually admitted are sitting in on the course than ones we have that the room had to be changed, then probably auditors will have to be excluded, is likely to agree that the curriculum needs revision.",
    "One morning I shot an elephant in my pajamas. How he got into my pajamas I'll never know.",
    "Then the fairies thanked him for his forgiveness, and promised to work very hard to please him; and the good-natured king took them all up in his arms, and carried them safely home to his palace.",
    "She gasped, hope racing through her as he dove toward the ground, switched to his human form in mid-air, and landed hard on the stony island.s ground.",
    "Intent on fleeing him as well as the demons, she ran as hard as she could back to the castle before doubling over to catch her breath.",
  ];
  res.json(sentences);
});

module.exports = router;
