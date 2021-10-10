const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sentenceSchema = new Schema({
  sentence: {
    type: String,
    required: true,
  },
  userId: {
    type: Number,
    default: null,
  },
});

module.exports = mongoose.model("Sentence", sentenceSchema);
