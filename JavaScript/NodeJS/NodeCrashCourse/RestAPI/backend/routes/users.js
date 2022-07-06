// import
const express = require("express");
const router = express.Router();

// controller fxns

const {
  getName,
  getAllUsers,
  createUsers,
  deleteUsers,
} = require("../controllers/users");

// routes

router.route("/").get(getAllUsers).post(createUsers);

router.route("/:id").delete(deleteUsers);

router.route("/name").get(getName);

module.exports = router;
