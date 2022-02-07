const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("working");
});
// load sub routes
router.use("/login", require("./login"));

// user logout
// router.post("/logout", auth, async (req, res) => {
//   try {
//     const { id } = req.user;
//     const userExist = await User.findByPk(id);
//     if (userExist == null) throw error.USER_NOT_EXIST; // if not exist throw error

//     // set logout status
//     let set = { isLogin: 0, sessionHash: await randomNumber() };
//     console.log("logout status---------", set);
//     await User.update(set, { where: { id } }); // mark user logout into DB

//     // send response to client
//     res.json(
//       await successResp({
//         msg: success.LOGOUT,
//       })
//     );
//   } catch (err) {
//     logErrorOccurred(__filename, err);
//     return res.status(error.code.SERVER_ERROR).json(await errorResp());
//   }
// });

module.exports = router;
