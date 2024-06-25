const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routers/user");

const app = express();
app.use(express.json());

app.use("/user", userRoutes);

// connect with mongodb
mongoose
  .connect("mongodb://localhost:27017")
  .then((success) => app.listen(3002))
  .catch((err) => console.log(err));