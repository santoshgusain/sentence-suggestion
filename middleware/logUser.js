const Log = require("../models/logs");

exports.logUser = async (req, res, next) => {
  const set = {
    userAgent: JSON.stringify(req.useragent),
    ip: req.ip,
  };
  const log = new Log(set);
  await log.save();

  next();
};
