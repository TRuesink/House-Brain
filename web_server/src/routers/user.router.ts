import express from "express";
import { authenticate } from "../middleware/auth";
import { createUser, login, myInfo } from "../controllers/user.controller";
const router = express.Router();

router.get("/", authenticate, myInfo).post("/", createUser);
router.post("/login", login);

export default router;
