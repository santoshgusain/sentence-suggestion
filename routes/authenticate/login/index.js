const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
// loading models
const User = require("../../../models/user");
// loading helpers
const { verifyHash } = require("../../../helpers/hash");

/**
 * @description User login and authentication
 * @onError Show Errors
 * @onSuccess Send user information with access and refresh token
 */
router.post("/", async (req, res) => {
  try {
    let userData = await getUserInfo(req, res);
    userData = userData.toJSON();
    await verifyPassword(req, res, userData);
    const accesstoken = await getAccessToken(userData);
    console.log(userData);
    delete userData.password;
    delete userData._id;
    delete userData.__v;
    console.log("Cookies------------------------", req.signedCookies);
    setCookies(res);
    res
      .cookie("cookieName", "cookieValue", {
        id: "santosh",
        maxAge: 1000 * 60 * 15,
        httpOnly: true,
        signed: true,
      })
      .json({
        msg: "login success",
        data: {
          ...userData,
          token: accesstoken,
        },
      });
    // send response to the client
  } catch (err) {
    console.log(err);
    return res.status(404).send("what???");
  }
});

function setCookies(res) {
  let options = {
    id: "santosh",
    maxAge: 1000 * 60 * 15, // would expire after 15 minutes
    httpOnly: true, // The cookie only accessible by the web server
    signed: true, // Indicates if the cookie should be signed
  };

  // Set cookie
  res.cookie("cookieName", "cookieValue", options); // options is optional
}

// function register(){

//   console.log(User);

//   let data = {
//     password: "password",
//     firstName: "santosh",
//     lastName: "gusain",
//     email: "santosh.gusain@gmail.com",
//     mobile: "7830619119",
//     dob: "2021-12-21T00:00:00.000Z",
//   };
//   let user = new User(data);
//   await user.save();
// }

/**
 * @description generate accesstoken
 * @param {*} userData
 */
async function getAccessToken(userData) {
  let accesstoken = await jwt.sign(
    {
      data: {
        _id: userData._id,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
  return accesstoken;
}

// // /**
// //  * @description generate refresh token
// //  * @param {*} userData
// //  */
// // async function getRefreshToken(userData, accesstoken) {
// //   let refreshtoken = await jwt.sign(
// //     {
// //       data: {
// //         userNumber: userData.userNumber,
// //         token: accesstoken,
// //         session: userData.sessionHash,
// //       },
// //     },
// //     process.env.REFRESH_TOKEN_SECRET,
// //     { expiresIn: "365d" }
// //   );
// //   return refreshtoken;
// // }

/**
 * @description Verify input password of the user
 * @param {*} req
 * @param {*} res
 * @param {*} user
 */
async function verifyPassword(req, res, userData) {
  const { password } = req.body;

  // verify password
  let isEqual = await verifyHash(password, userData.password);
  if (!isEqual) {
    throw new Error("invalid password");
    // return res.json("invalid credentials");
  }
  // mark user login into DB
  await User.findByIdAndUpdate(userData._id, { isLogin: true });

  return userData;
}

/**
 * @description fetch user information with email or mobile
 * @param {*} credential
 */
async function getUserInfo(req, res) {
  const { email } = req.body;

  const query = { email };
  const user = await User.findOne(query);

  return user;
}

module.exports = router;
