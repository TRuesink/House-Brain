const express = require("express");
const router = express.Router();

const {
  getUser,
  createUser,
  login,
} = require("../controllers/user.controller");

router.get("/", getUser).post("/", createUser);
router.post("/login", login);

module.exports = router;
