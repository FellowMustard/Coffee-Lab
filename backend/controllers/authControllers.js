const User = require("../models/User");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
require("dotenv").config();

const handleError = (err) => {
  //   console.log(err.message, err.code, err);
  let errors = { username: "", email: "", password: "" };

  if (err.code === 11000) {
    if (err.keyValue.hasOwnProperty("username")) {
      errors.username = "Username is already used";
    }
    if (err.keyValue.hasOwnProperty("email")) {
      errors.email = "Email is already used";
    }
  }
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

//Get All User
const getAllUser = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

//Find User Data
const findUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such User" });
  }
  const user = await User.findById(id).select("-password");

  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }
  res.status(200).json(user);
};

//Create User
const createUser = async (req, res) => {
  const { username, email, password, displayName } = req.body;
  let currDisplayName = displayName || username;
  let hashedPassword = await bcrypt.hash(password, process.env.SALT);
  try {
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      displayName: currDisplayName,
    });
    res.status(200).json(user);
  } catch (err) {
    let error = handleError(err);
    res.status(400).json(error);
  }
};

//Login User
const loginUser = async (req, res) => {
  const { credential, password } = req.body;
  let user = await User.findOne({ username: credential });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      res.status(200).json(user);
    }
    return res.status(400).json({ error: "Incorect password" });
  } else {
    user = await User.findOne({ email: credential });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return res.status(200).json(user);
      }
      return res.status(400).json({ error: "Incorect password" });
    } else {
      return res.status(400).json({ error: "Incorect username/email" });
    }
  }
};

module.exports = {
  getAllUser,
  createUser,
  findUser,
  loginUser,
};
