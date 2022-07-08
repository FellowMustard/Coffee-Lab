const User = require("../models/User");
const bcrypt = require("bcrypt");
const { preact } = require("laravel-mix");
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
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: err });
  }
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
module.exports = {
  getAllUser,
  createUser,
};
