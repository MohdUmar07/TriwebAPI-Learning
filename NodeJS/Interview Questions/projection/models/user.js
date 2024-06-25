const mongoose = require("mongoose");

// schema
const userSchema = new mongoose.Schema({
  userName: String,
  mobile: String,
});

const User = mongoose.model("User", userSchema);
// model

module.exports = User;