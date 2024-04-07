const jwt = require("jsonwebtoken");

const generateAccessToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.TOKEN_SECRET, {
    expiresIn: 1800,
  });
};

module.exports = {
  generateAccessToken,
};
