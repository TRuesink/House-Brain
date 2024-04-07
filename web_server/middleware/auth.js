const jwt = require("jsonwebtoken");
const asyncHandler = require("./asyncHandler");

const authenticate = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  // split the authHeader into an array and get the token
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).send({
      message: "Access denied",
    });
  }
  const userInfo = await jwt.verify(token, process.env.TOKEN_SECRET);
  req.user = userInfo;
  next();
});

module.exports = {
  authenticate,
};
