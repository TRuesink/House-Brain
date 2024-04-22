import bcrypt from "bcryptjs";
import _ from "lodash";
import db from "../models";
import asyncHandler from "../middleware/asyncHandler";
import { generateAccessToken } from "../utils/auth";

const User = db.User;

export const createUser = asyncHandler(async (req, res) => {
  // Validate request
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const existingUser = await User.findOne({
    where: { email: req.body.email },
  });

  if (existingUser) {
    res.status(400).send({
      message: "User already exists",
    });
    return;
  }

  // Create a User
  const passwordHash = await bcrypt.hash(req.body.password, 12);
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: passwordHash,
  };
  // Save User in the database
  const userData = await User.create(user);
  const token = generateAccessToken(userData.id);
  res.json({ user: _.omit(userData.dataValues, ["password"]), token });
});

export const login = asyncHandler(async (req, res) => {
  const user = await User.findOne({
    where: { email: req.body.email },
  });

  if (!user) {
    res.status(404).send({
      message: "User not found",
    });
    return;
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isPasswordValid) {
    res.status(401).send({
      message: "Invalid Password!",
    });
    return;
  }

  const token = generateAccessToken(user.id);
  res.json({ user: _.omit(user.dataValues, ["password"]), token });
});

export const myInfo = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.user.id);
  res.json(_.omit(user.dataValues, ["password"]));
});

export const logout = asyncHandler(async (req, res) => {
  res.json({ message: "Log out OK" });
});
