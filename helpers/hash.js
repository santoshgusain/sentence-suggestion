const bcrypt = require("bcrypt");

// crete user password hash
exports.createPassword = async (password) => {
    try {
      // generate password hash
      const saltRounds    = Math.floor(Math.random() * 10)+5;
      const salt          = await bcrypt.genSalt(saltRounds);
      return passwordHash = await bcrypt.hash(password, salt);
    } catch (err) {
      console.error(err);
      res.status(200).json({ status: false, msg: err.message });
    }
};

// crete user otp hash
exports.createOtpHash = async (otp) => {
    try {
      // generate hash
      const saltRounds    = Math.floor(Math.random() * 10)+5;
      const salt          = await bcrypt.genSalt(saltRounds);
      return otpHash = await bcrypt.hash(otp, salt);
    } catch (err) {
      console.error(err);
      res.status(200).json({ status: false, msg: err.message });
    }
};

// verify hash
exports.verifyHash = async (plainText,hash) => {
    try {
      console.log(plainText,hash);
      return await bcrypt.compare(plainText, hash);
    } catch (err) {
      console.log("inside verify has function ********",err.message);
      return false;
    }
};