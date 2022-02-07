const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logsSchema = new Schema({
  userAgent: {
    type: String,
    default: null,
  },
  ip: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model("Log", logsSchema);
