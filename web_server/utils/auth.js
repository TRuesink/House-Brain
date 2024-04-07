const jwt = require("jsonwebtoken");

const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, process.env.TOKEN_SECRET, {
    expiresIn: "60m",
  });
};

module.exports = {
  generateAccessToken,
};
