import express from "express";
import mogan from "morgan";
import userRouter from "./routers/user.router";
const app = express();

app.use(mogan("dev"));
app.use(express.json());
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