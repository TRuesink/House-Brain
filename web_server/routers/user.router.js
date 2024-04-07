const express = require("express");
const router = express.Router();
const { authenticate } = require("../middleware/auth");

const { createUser, login, myInfo } = require("../controllers/user.controller");

router.get("/", authenticate, myInfo).post("/", createUser);
router.post("/login", login);

module.exports = router;
