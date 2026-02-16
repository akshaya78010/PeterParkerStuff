const express = require("express");
const route = require("./route/FirstRoute");
const cors = require("cors");
const mongoose = require("mongoose");
const cookie_parser = require("cookie-parser");

// const model = require("./model/model.js");
const app = express();

app.use(
  cors({
    origin: "https://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(route);
app.use(cookie_parser());

const connection = async (req, res) => {
  try {
    mongoose.connect(
      "mongodb+srv://majjiakshaya_db_user:Akshu%40123@cluster0.x15sqyp.mongodb.net/Data",
    );

    console.log("Database Connected");
    // return res.status(200).json("DataBase Connected");
  } catch (err) {
    console.log(err);
    // return res.status(500).json({ error: err });
  }
};

connection();

app.listen(9000, () => {
  console.log("Server running at port 9000");
});
