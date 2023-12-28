const express = require("express");
const app = express();
const mogan = require("morgan");
const userRouter = require("./routers/user.router");

app.use(mogan("dev"));
app.use("/api/user", userRouter);

app.get("/api/status", (req, res) => {
  res.send({
    message: "hello world",
    status: "ok",
  });
});

const PORT = process.env.PORT || 5024;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
