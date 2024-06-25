const User = require("../models/user");

const postUser = async (req, res) => {
  const user = new User(req.body);
  const result = await user.save();
  res.send({ result, status: "success" });
};

const getUser = async (req, res) => {
  const user = await User.find({}, { userName: 1, _id: 0 });
  res.send({ user });
};
module.exports.postUser = postUser;
module.exports.getUser = getUser;