const User = require("../models/user-model");

module.exports.home = async (req, res) => {
  try {
    res.status(200).send("Welcome");
  } catch (error) {
    console.log(error);
  }
};

module.exports.register = async (req, res) => {
  try {
    res.status(200).send("Welcome to registration page");
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "email already exist" });
    }

    const userCreated = await User.create({ username, email, phone, password });

    res.json({ msg: userCreated });
  } catch (error) {
    console.log(error);

    res.status(400).send("Page not found");
  }
};
