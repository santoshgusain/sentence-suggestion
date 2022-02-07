const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    default: null,
    required: true,
  },
  lastName: {
    type: String,
    default: null,
    required: true,
  },
  email: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    default: null,
  },
  mobile: {
    type: String,
    default: null,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  isLogin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
