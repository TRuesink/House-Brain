import express from "express";
import { authenticate } from "../middleware/auth";
import {
  createUser,
  login,
  myInfo,
  logout,
} from "../controllers/user.controller";
const router = express.Router();

router.get("/", authenticate, myInfo).post("/", createUser);
router.post("/login", login);
router.post("/logout", authenticate, logout);

export default router;
