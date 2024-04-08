import jwt from "jsonwebtoken";

export const generateAccessToken = (userId: number) => {
  return jwt.sign({ id: userId }, process.env.TOKEN_SECRET, {
    expiresIn: 1800,
  });
};
