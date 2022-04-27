require("dotenv").config();
var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { logUser } = require("./middleware/logUser");
const PORT = process.env.PORT||3001;

const db = require("./config/db");
db();

var app = express();

var useragent = require("express-useragent");

app.use(useragent.express());

app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("santosh"));
app.use(express.static(path.join(__dirname, "public")));

app.use(logUser);

app.use("/api", require("./routes"));

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


app.listen(PORT,(err)=>{
  if(err)
    console.log(err);
    else
    console.log(`app running on ${PORT}`);
});

// module.exports = app;
