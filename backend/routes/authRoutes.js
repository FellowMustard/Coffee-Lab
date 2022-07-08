const express = require("express");
const router = express.Router();
const { getAllUser, createUser } = require("../controllers/authControllers");

//Get All User
router.get("/", getAllUser);

//Get Specific User
router.get("/:id", (req, res) => {
  res.status(200).json({ message: "Get Specific User Successful" });
});

//Create User
router.post("/", createUser);

module.exports = router;
