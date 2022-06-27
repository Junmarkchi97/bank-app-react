import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();

//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//DATABASE
const registeredUsers = [
  {
    name: "John Doe",
    email: "test@gmail.com",
    balace: 1000,
  },
  {
    name: "Junmark Chi",
    email: "junmark@chi.com",
    balace: 2000,
  },
  {
    name: "John Doe",
    email: "test@gmail.com",
    balace: 3000,
  },
];

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (!err) {
      console.log("Connected to Database");
    } else {
      console.log(err);
    }
  }
);

const users = new mongoose.Schema({
  name: String,
  email: String,
  balance: Number,
});

const Users = mongoose.model("users", users);

app.get("/api/v1/users", (req, res) => {
  res.send("express here");
});

app.listen(3001, () => {
  console.log("Server is running");
});
