const mongoose = require("mongoose");
const db = process.env.MONGODB_URI_LIVE;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.log("@@@@@@@@@here is an");
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
