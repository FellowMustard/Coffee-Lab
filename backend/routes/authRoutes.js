const express = require("express");
const router = express.Router();
const {
  getAllUser,
  createUser,
  findUser,
  loginUser,
} = require("../controllers/authControllers");

//Get All User
router.get("/", getAllUser);

//Get Specific User
router.get("/:id", findUser);

//Create User
router.post("/", createUser);

//Login User
router.post("/login", loginUser);

module.exports = router;
