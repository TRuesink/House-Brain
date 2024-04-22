import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler";

export const authenticate = asyncHandler(async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({
      message: "Access denied",
    });
  }
  const token = authorization.split(" ")[1];
  if (!token) {
    return res.status(401).send({
      message: "Access denied",
    });
  }
  const userInfo = await jwt.verify(token, process.env.JWT_TOKEN_SECRET);
  req.user = userInfo;
  next();
});
