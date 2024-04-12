import express from "express";
import mogan from "morgan";
import cookieSession from "cookie-session";
import userRouter from "./routers/user.router";
const app = express();

app.use(mogan("dev"));
app.use(express.json());
app.use(
  cookieSession({
    name: "perfect_day_session",
    keys: [process.env.COOKIE_SECRET],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

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
