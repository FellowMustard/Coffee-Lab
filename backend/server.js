//Package
const express = require("express");
const { default: mongoose } = require("mongoose");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

//initialize express
const app = express();

//Port
const port = process.env.PORT_NUM || 4000;

//Middleware
app.use(express.json());

//Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Database is ready and server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//route
app.use("/api/auth", authRoutes);
