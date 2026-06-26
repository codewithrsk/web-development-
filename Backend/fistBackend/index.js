import dotenv from "dotenv";
dotenv.config();

import express from "express";
import AuthRouter from "./src/routers/auth.route.js";
import PublicRouter from "./src/routers/public.route.js";
import conectDB from "./src/config/dbConnection.config.js";
const app = express();

app.use(express.json());

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);

app.get("/", (req, res) => {
  console.log("Defult Get API Hit");
  res.json({ massage: "Welcom to my fist backend project" });
});

app.post("/login", (req, res) => {
  res.json({ massage: "login Sucesfull" });
});

// Defult Error Handling

app.use((err, req, res, next) => {
  const ErrMessage = err.message || "Internal Server Error";
  const ErrStausCode = err.statusCode || 500;

  res.status(ErrStausCode).json({ message: ErrMessage });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server Start on Port ", port);
  conectDB();
});
