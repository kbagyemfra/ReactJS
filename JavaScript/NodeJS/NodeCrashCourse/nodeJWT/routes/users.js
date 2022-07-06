const express = require("express");
const router = express.Router();

const {
  getLogin,
  getSignUp,
  postLogin,
  postSignUp,
  deleteAllUsers,
  getLogout,
} = require("../controllers/auth");

router.route("/signup").post(postSignUp).get(getSignUp);

router.route("/login").get(getLogin).post(postLogin);

router.route("/logout").get(getLogout);

router.route("/bye").delete(deleteAllUsers);

module.exports = router;
