const mongoose = require("mongoose");
const { isEmail } = require("validator");

const schema = mongoose.Schema;

const userSchema = new schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      minlength: [6, "Minimum length of username is 6"],
      unique: [true, "Username is already used"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: [isEmail, "Please enter a valid email"],
      unique: [true, "Email is already used"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Minimum length of password is 6"],
    },
    displayName: {
      type: String,
      minlength: 3,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
