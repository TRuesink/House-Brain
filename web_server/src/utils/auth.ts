import jwt from "jsonwebtoken";

export const generateAccessToken = (userId: number) => {
  return jwt.sign({ id: userId }, process.env.JWT_TOKEN_SECRET);
};
